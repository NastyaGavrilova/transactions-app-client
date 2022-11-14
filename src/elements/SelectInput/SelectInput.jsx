import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as Chevron } from '../../icons/chevron.svg';
import './_selectInput.scss';

const SelectInput = props => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(props.initialValues);
  const wrapperRef = useRef(null);
  useEffect(() => {
    const closeDropdown = e => {
      if (e.path[0] !== wrapperRef.current) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);
  });
  return (
    <div className="e-select-search">
      <div className="e-select-search__wrapper">
        <input
          className="e-select-search__input"
          placeholder="Address"
          ref={wrapperRef}
          onClick={() => setOpen(true)}
          type="text"
          value={props.value}
          onChange={props.onChange}
        />
        <Chevron
          onClick={() => setOpen(true)}
          className={
            isOpen
              ? 'e-select-search__chevron-open'
              : 'e-select-search__chevron-close'
          }
        />
      </div>
      <datalist
        className={
          isOpen === true
            ? 'e-select-search__datalist-open'
            : 'e-select-search__datalist-hidden'
        }
      >
        {props.items
          ?.filter(item => {
            const searchTerm = props.value.toLowerCase();
            const name = item.label.toLowerCase();

            return searchTerm === ''
              ? name
              : searchTerm && name.includes(searchTerm);
          })
          .slice(0, 10)
          .map(item => (
            <option
              onClick={() => {
                props.onSearch(item.label);
                setOpen(false);
              }}
              className="e-select-search__option"
              key={item.id}
            >
              {item.label}
            </option>
          ))}
      </datalist>
    </div>
  );
};

export default SelectInput;
