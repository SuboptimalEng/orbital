import { useState } from 'react';
import { applyTheme, selectableThemes } from '../../themes/utils';

const Settings = (props: { icon: string }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="border" onClick={() => setToggle(!toggle)}>
      {props.icon}
      {toggle && (
        <div className="absolute">
          {selectableThemes.map((theme) => {
            return (
              <div
                key={theme.name}
                onClick={() => applyTheme(theme.theme)}
                className="border-2 rounded p-2 m-2"
              >
                {theme.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { Settings };
