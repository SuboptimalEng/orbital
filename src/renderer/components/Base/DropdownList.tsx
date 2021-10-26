import { useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { AiOutlineArrowDown } from 'react-icons/ai';

// NOTE: Should we implement OptionValueType constraint?
// type OptionValueType = number | string;
// type Option<T extends OptionValue> = {
//   value: T;
//   label: string;
// };

interface IOption<T> {
  value: T;
  label: string;
}

interface IDropdownList<T> {
  value: T;
  title: string;
  options: Array<IOption<T>>;
  onChange: (value: T) => void;
}

export default function DropdownList<T>({
  value,
  title,
  options,
  onChange,
}: IDropdownList<T>) {
  const [result, setResult] = useState<T>(value);
  const onSelectionChange = (value: T) => {
    setResult(value);
  };

  useEffect(() => {
    onChange(result);
    // eslint-disable-next-line
  }, [result]);

  return (
    <div className="flex flex-col space-y-2">
      <div className="font-medium">{title}</div>
      <Listbox value={result} onChange={onSelectionChange}>
        {({ open }) => {
          return (
            <div className="w-40 relative">
              <Listbox.Button className="transition-all duration-500 flex bg-activity-bg hover:bg-activity-hover text-activity-fg place-items-center justify-between p-2 text-xl rounded-md w-full focus:outline-none">
                <div>{result}</div>
                <div>
                  <AiOutlineArrowDown />
                </div>
              </Listbox.Button>
              {open && (
                <div className="transition-all duration-500 absolute bg-activity-bg text-activity-fg z-10 w-full cursor-pointer rounded-md mt-1">
                  <Listbox.Options className="focus:outline-none rounded-md">
                    {options.map((option) => (
                      <Listbox.Option key={option.label} value={option.value}>
                        {({ active }) => (
                          <div
                            className={`${
                              active
                                ? 'transition-all duration-500 opacity-100 text-xl bg-activity-hover p-2 rounded-md'
                                : 'transition-all duration-500 opacity-50 p-2 text-xl rounded-md'
                            }`}
                          >
                            {option.label}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              )}
            </div>
          );
        }}
      </Listbox>
    </div>
  );
}
