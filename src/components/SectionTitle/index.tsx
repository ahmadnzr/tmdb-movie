import React, { useState } from "react";
import styled from "styled-components";

export interface SelectionItemType<T = string> {
  id: number;
  label: string;
  value: T;
}

interface SectionTitleProps<T = string> {
  title: string;
  items?: SelectionItemType<T>[];
  selected?: SelectionItemType<T>;
  onSelect?: (item: SelectionItemType<T>) => void;
  onBack?: () => void;
}

function SectionTitle<T>({
  title,
  items,
  onSelect,
  selected: initialSelected,
  onBack,
}: SectionTitleProps<T>) {
  const [selected, setSelected] = useState<SelectionItemType<T> | undefined>(
    initialSelected,
  );

  const handleSelect = (item: SelectionItemType<T>) => {
    setSelected(item);
    onSelect && onSelect(item);
  };

  return (
    <SectionTitleContainer>
      {onBack ? <BackButton onClick={onBack}>Back</BackButton> : null}
      <h2 className="section-title">{title}</h2>
      {items?.length ? (
        <Selection>
          {items.map((item) => (
            <SelectionItem key={item.id} onClick={() => handleSelect(item)}>
              {item.label}
            </SelectionItem>
          ))}
          <SelectionHover $select={selected?.id || 0}>
            {selected?.label || "Title"}
          </SelectionHover>
        </Selection>
      ) : null}
    </SectionTitleContainer>
  );
}

export default SectionTitle;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xlarge};
`;

const Selection = styled.div`
  position: relative;
  display: flex;
  padding: 4px 0;

  background-color: ${(props) => props.theme.color.primary};
  border-radius: 10px;
  overflow: hidden;
`;

const SelectionItem = styled.label<{ $active?: boolean }>`
  min-width: 6rem;
  padding: 2px 0;

  cursor: pointer;

  text-align: center;
  color: ${(props) => props.theme.color.neutral2};
`;

const SelectionHover = styled.button<{ $select: number }>`
  min-width: 6rem;

  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.$select * 6}rem;

  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.color.neutral};
  background-color: ${(props) => props.theme.color.bg};

  border-radius: 10px;
  transition: ${(props) => props.theme.animation};
`;

const BackButton = styled.button`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
  &:before {
    width: 12px;
    height: 12px;
    content: "";
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("/icons/left.svg");
  }
`;
