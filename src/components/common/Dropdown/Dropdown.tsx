import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import icons

export interface Item<T> {
  text: string;
  icon?: string;
  description?: string;
  value: T;
}

export type DropdownProps<T> = {
  items: Item<T>[];
  onSelect: (item: Item<T>) => void;
  dropdownClasses?: string;
  triggerClasses?: string;
  menuClasses?: string;
  menuItemClasses?: string;
};

export type TriggerProps = {
  isOpen: boolean;
  label: string;
  onClick: () => void;
  triggerClasses: string;
};

export type DropdownMenuProps<T> = {
  items: Item<T>[];
  selectedIndex: number;
  menuClasses?: string;
  menuItemClasses?: string;
  onItemClick: (item: Item<T>) => void;
};

const Trigger = ({ isOpen, label, onClick, triggerClasses }: TriggerProps) => {
  return (
    <div className={classNames('trigger', triggerClasses)} tabIndex={0} onClick={onClick}>
      <span className='selection'>{label}</span>
      {isOpen ? (
        <span className='caret caret-up'>
          <FiChevronUp className='icon' />
        </span>
      ) : (
        <span className='caret caret-down'>
          <FiChevronDown className='icon' />
        </span>
      )}
    </div>
  );
};

const DropdownMenu = <T extends unknown>({
  items,
  selectedIndex,
  onItemClick,
  menuClasses,
  menuItemClasses
}: DropdownMenuProps<T>) => {
  return (
    <div className={classNames('dropdown-menu', menuClasses)}>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onItemClick(item)}
          className={classNames('item-container', menuItemClasses, {
            selected: selectedIndex === index
          })}
        >
          <div className='details'>
            <span>{item.icon && <img src={item.icon} alt={item.text} />}</span>
            {item.text}
            {item.description && <small>{item.description}</small>}
          </div>
        </div>
      ))}
    </div>
  );
};

const useDropdown = <T extends unknown>(items: Item<T>[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item<T> | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const toggleDropdown = () => setIsOpen(isOpen => !isOpen);
  const closeDropdown = () => setIsOpen(false);

  return {
    items,
    isOpen,
    toggleDropdown,
    closeDropdown,
    selectedItem,
    setSelectedItem,
    selectedIndex,
    setSelectedIndex
  };
};

const Dropdown = <T extends unknown>({
  items,
  onSelect,
  dropdownClasses,
  triggerClasses,
  menuClasses,
  menuItemClasses
}: DropdownProps<T>) => {
  const { isOpen, selectedItem, selectedIndex, toggleDropdown, closeDropdown, setSelectedItem } =
    useDropdown(items);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, closeDropdown]);

  return (
    <div className={classNames('dropdown', dropdownClasses)} ref={dropdownRef}>
      <Trigger
        isOpen={isOpen}
        onClick={toggleDropdown}
        label={selectedItem ? selectedItem.text : 'Select an item...'}
        triggerClasses={triggerClasses as string}
      />
      {isOpen && (
        <DropdownMenu
          items={items}
          onItemClick={item => {
            setSelectedItem(item);
            onSelect(item);
          }}
          selectedIndex={selectedIndex}
          menuClasses={menuClasses as string}
          menuItemClasses={menuItemClasses as string}
        />
      )}
    </div>
  );
};

export default Dropdown;
