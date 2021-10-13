import { useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';

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
              <Listbox.Button className="flex bg-activity-bg text-activity-fg place-items-center justify-between px-2 py-1 w-full focus:outline-none">
                <div>{result}</div>
                <div>🔽</div>
              </Listbox.Button>
              {open && (
                <div className="absolute bg-activity-bg text-activity-fg z-10 w-full cursor-pointer">
                  <Listbox.Options className="focus:outline-none">
                    {options.map((option) => (
                      <Listbox.Option key={option.label} value={option.value}>
                        {({ active }) => (
                          <div
                            className={`${
                              active
                                ? 'bg-activity-hover px-2 py-1'
                                : 'px-2 py-1'
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
