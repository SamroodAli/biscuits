import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { cs } from "../constants";

export interface DropDownItem {
  id?: number | string;
  label: string;
  value: string;
  className?: string;
}

interface Props {
  items: DropDownItem[];
  currentItem: DropDownItem;
  onItemClick: (e: DropDownItem) => void;
}

export const DropDown: React.FC<Props> = ({
  items,
  currentItem,
  onItemClick,
}) => {
  return (
    <Listbox value={currentItem} onChange={onItemClick}>
      <Listbox.Button>{currentItem.label}</Listbox.Button>
      <Listbox.Options>
        {items.map((item) => (
          <Listbox.Option
            key={item.id ?? item.label}
            value={item}
            className={cs(item.className, "text-lg")}
          >
            {item.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
