import { useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { numOfFilesToLoadType } from '../../types';

interface IListbox {
  initialValue: numOfFilesToLoadType;
  array: Array<numOfFilesToLoadType>;
  onChange: (value: numOfFilesToLoadType) => void;
}

export default function DropdownList(props: IListbox) {
  const [selection, setSelection] = useState(props.initialValue);

  useEffect(() => {
    props.onChange(selection);
  }, [selection]);

  return (
    <div className="relative">
      <Listbox value={selection} onChange={setSelection}>
        {({ open }) => {
          return (
            <div>
              <Listbox.Button>{selection}</Listbox.Button>
              {open && (
                <div className="absolute border">
                  <Listbox.Options>
                    {props.array.map((n) => (
                      <Listbox.Option key={n} value={n}>
                        {n}
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
