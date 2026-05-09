'use client';

import { type SubmitEvent, type JSX, useCallback, useEffect, useRef, useState } from 'react';

import Button from '@/components/primitives/Button';
import Input from '@/components/primitives/Input';
import Label from '@/components/primitives/Label';
import Select from '@/components/primitives/Select';
import { fetchIpsum } from '@/utils/ipsum';
import type { LoremType } from '@/utils/ipsum';

/**
 * Props for the IpsumForm component.
 */
interface IpsumFormProps {
  setOutput: (output: string) => void;
}

/**
 * Ensures a fetch error message is set on output only when the component isn't cancelled.
 *
 * @param {boolean} cancelled - Whether the effect has been cleaned up.
 * @param {(output: string) => void} setOutput - Output setter.
 * @param {unknown} error - The caught error.
 */
function handleFetchError(cancelled: boolean, setOutput: (output: string) => void, error: unknown): void {
  if (cancelled) return;

  if (error instanceof Error && error.name === 'AbortError') {
    setOutput('Request cancelled.');
    return;
  }

  console.error(error);
  setOutput('Error generating text. Please try again.');
}

/**
 * IpsumForm component for generating vegan ipsum text based on user input.
 *
 * @param {IpsumFormProps} props - The props for the component, including a function to set the generated output.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function IpsumForm({ setOutput }: IpsumFormProps): JSX.Element {
  const [selectedType, setSelectedType] = useState<LoremType>('paragraphs');
  const [amount, setAmount] = useState<string>('3');
  const [loading, setLoading] = useState<boolean>(false);

  // Ref to store the AbortController across renders
  const abortControllerRef = useRef<AbortController | null>(null);

  /**
   * Handles the generation of vegan ipsum text by making an API call.
   * Updates the output or sets an error message in case of failure.
   */
  const handleGenerate = useCallback(
    async (type: LoremType, amount: string): Promise<void> => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort(); // Abort any ongoing request
      }

      const controller = new AbortController();
      abortControllerRef.current = controller;
      const signal = controller.signal;

      setLoading(true); // Set loading state

      try {
        const text = await fetchIpsum(type, amount, signal);

        // Only update state if this specific request wasn't aborted
        if (!signal.aborted) {
          setOutput(text);
        }
      } catch (error) {
        handleFetchError(false, setOutput, error);
      } finally {
        setLoading(false);
      }
    },
    [setOutput, setLoading]
  );

  useEffect(() => {
    let cancelled = false;

    const initGenerate = async () => {
      const controller = new AbortController();
      abortControllerRef.current = controller;
      const signal = controller.signal;

      try {
        const text = await fetchIpsum(selectedType, amount, signal);

        if (!cancelled && !signal.aborted) {
          setOutput(text);
        }
      } catch (error) {
        handleFetchError(cancelled, setOutput, error);
      }
    };

    void initGenerate();

    return () => {
      cancelled = true;
      abortControllerRef.current?.abort();
      abortControllerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Handles the form submission event.
   * Prevents default behavior and triggers the text generation process.
   *
   * @param {SubmitEvent<HTMLFormElement>} event - The form submission event
   */
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleGenerate(selectedType, amount);
  };

  return (
    <form
      id="generate-vegan-ipsum-form"
      onSubmit={handleSubmit}
      className="flex flex-col flex-wrap gap-4 md:flex-row md:space-y-0"
    >
      <div className="flex flex-1 items-center gap-4">
        <div className="flex-1 space-y-2">
          <Label
            htmlFor="form-amount"
            className="text-secondary-800 mb-2 block text-xs font-bold tracking-wide uppercase"
          >
            Number of units
          </Label>
          <Input
            id="form-amount"
            className="w-full"
            type="number"
            min="1"
            max="30"
            step="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            aria-label="Number of units"
            required
          />
        </div>

        <div className="flex-1 space-y-2">
          <Label
            htmlFor="form-type"
            className="text-secondary-800 mb-2 block text-xs font-bold tracking-wide uppercase"
          >
            Generate As
          </Label>
          <Select
            id="form-type"
            className="w-full"
            value={selectedType}
            options={[
              { label: 'Paragraphs', value: 'paragraphs' },
              { label: 'Sentences', value: 'sentences' },
              { label: 'Words', value: 'words' },
            ]}
            onValueChange={(value) => setSelectedType(value as 'paragraphs' | 'sentences' | 'words')}
            required
          />
        </div>
      </div>

      <Button type="submit" disabled={loading} className="md:mt-6 md:w-50" size="lg">
        {loading ? 'Generating Ipsum...' : 'Generate Ipsum'}
      </Button>
    </form>
  );
}
