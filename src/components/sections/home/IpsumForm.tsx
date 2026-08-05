'use client';

import { type JSX, useCallback, useEffect, useRef, useState, type ChangeEvent, type SubmitEvent } from 'react';

import Button from '@/components/primitives/Button';
import Input from '@/components/primitives/Input';
import Label from '@/components/primitives/Label';
import Select from '@/components/primitives/Select';
import { fetchIpsum } from '@/utils/ipsum';
import type { LoremType } from '@/utils/ipsum';

/**
 * Props for the IpsumForm component.
 *
 * @type {IpsumFormProps}
 * @property {(output: string) => void} setOutput - Function to set the generated output
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

function useIpsumFetch(setOutput: (output: string) => void) {
  const [loading, setLoading] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleGenerate = useCallback(
    async (type: LoremType, amt: string): Promise<void> => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const controller = new AbortController();
      abortControllerRef.current = controller;
      const signal = controller.signal;

      setLoading(true);

      try {
        const text = await fetchIpsum(type, amt, signal);

        if (!signal.aborted) {
          setOutput(text);
        }
      } catch (error) {
        handleFetchError(signal.aborted, setOutput, error);
      } finally {
        setLoading(false);
      }
    },
    [setOutput]
  );

  return { loading, abortControllerRef, setLoading, handleGenerate };
}

/**
 * Props for the FormInput component.
 *
 * @type {FormInputProps}
 * @property {string} amount - Current amount value.
 * @property {(e: ChangeEvent<HTMLInputElement>) => void} onAmountChange - Change handler.
 */
interface FormInputProps {
  amount: string;
  onAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Renders the number of units input field.
 *
 * @param {FormInputProps} props - The component props.
 *
 * @returns {JSX.Element} The rendered input field.
 */
function FormInput({ amount, onAmountChange }: FormInputProps): JSX.Element {
  return (
    <div className="flex-1 space-y-2">
      <Label htmlFor="form-amount" className="text-secondary-800 mb-2 block text-xs font-bold tracking-wide uppercase">
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
        onChange={onAmountChange}
        aria-label="Number of units"
        required
      />
    </div>
  );
}

/**
 * Props for the FormSelect component.
 *
 * @type {FormSelectProps}
 * @property {LoremType} selectedType - Currently selected type.
 * @property {(value: LoremType) => void} onTypeChange - Type change callback.
 */
interface FormSelectProps {
  selectedType: LoremType;
  onTypeChange: (value: LoremType) => void;
}

/**
 * Renders the generate-as type select dropdown.
 *
 * @param {FormSelectProps} props - The component props.
 *
 * @returns {JSX.Element} The rendered select dropdown.
 */
function FormSelect({ selectedType, onTypeChange }: FormSelectProps): JSX.Element {
  return (
    <div className="flex-1 space-y-2">
      <Label htmlFor="form-type" className="text-secondary-800 mb-2 block text-xs font-bold tracking-wide uppercase">
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
        onValueChange={(value) => onTypeChange(value as LoremType)}
        required
      />
    </div>
  );
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

  const { loading, handleGenerate } = useIpsumFetch(setOutput);

  useEffect(() => {
    let cancelled = false;

    const initGenerate = async () => {
      const controller = new AbortController();

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
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Handles the form submission event.
   * Prevents default behavior and triggers the text generation process.
   *
   * @param {SubmitEvent} event - The form submission event
   */
  const handleSubmit = (event: SubmitEvent): void => {
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
        <FormInput amount={amount} onAmountChange={(e) => setAmount(e.target.value)} />
        <FormSelect selectedType={selectedType} onTypeChange={setSelectedType} />
      </div>

      <Button type="submit" disabled={loading} className="md:mt-6 md:w-50" size="lg">
        {loading ? 'Generating Ipsum...' : 'Generate Ipsum'}
      </Button>
    </form>
  );
}
