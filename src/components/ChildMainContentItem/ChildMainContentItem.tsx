import React from "react";

import { item } from "../../shared/interfaces/item.interface";

interface ChildMainContentItemProps {
  item: item;
  isEditing: boolean;
  editedRowName: string;
  editedSalary: number;
  editedEquipmentCosts: number;
  editedOverheads: number;
  editedEstimatedProfit: number;
  setEditedRowName: (e: string) => void;
  setEditedSalary: (e: number) => void;
  setEditedEquipmentCosts: (e: number) => void;
  setEditedOverheads: (e: number) => void;
  setEditedEstimatedProfit: (e: number) => void;
  handleDoubleClick: () => void;
  handleInputKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const ChildMainContentItem: React.FC<ChildMainContentItemProps> = ({
  item,
  isEditing,
  editedRowName,
  editedSalary,
  editedEquipmentCosts,
  editedOverheads,
  editedEstimatedProfit,
  setEditedSalary,
  setEditedRowName,
  setEditedEquipmentCosts,
  setEditedOverheads,
  setEditedEstimatedProfit,
  handleDoubleClick,
  handleInputKeyPress,
}) => {
  return (
    <>
      <div className="list-expenses-item" onDoubleClick={handleDoubleClick}>
        {isEditing || item.isEditing ? (
          <input
            type="text"
            value={editedRowName}
            onChange={(e) => setEditedRowName(e.target.value)}
            onKeyDown={handleInputKeyPress}
          />
        ) : (
          item.rowName
        )}
      </div>
      <div className="list-expenses-item" onDoubleClick={handleDoubleClick}>
        {isEditing || item.isEditing ? (
          <input
            type="number"
            value={editedSalary}
            onChange={(e) => {
              setEditedSalary(+e.target.value);
            }}
            onKeyDown={handleInputKeyPress}
          />
        ) : (
          item.salary
        )}
      </div>
      <div className="list-expenses-item" onDoubleClick={handleDoubleClick}>
        {isEditing || item.isEditing ? (
          <input
            type="number"
            value={editedEquipmentCosts}
            onChange={(e) => {
              setEditedEquipmentCosts(+e.target.value);
            }}
            onKeyDown={handleInputKeyPress}
          />
        ) : (
          item.equipmentCosts
        )}
      </div>
      <div className="list-expenses-item" onDoubleClick={handleDoubleClick}>
        {isEditing || item.isEditing ? (
          <input
            type="number"
            value={editedOverheads}
            onChange={(e) => {
              setEditedOverheads(+e.target.value);
            }}
            onKeyDown={handleInputKeyPress}
          />
        ) : (
          item.overheads
        )}
      </div>
      <div className="list-expenses-item" onDoubleClick={handleDoubleClick}>
        {isEditing || item.isEditing ? (
          <input
            type="number"
            value={editedEstimatedProfit}
            onChange={(e) => {
              setEditedEstimatedProfit(+e.target.value);
            }}
            onKeyDown={handleInputKeyPress}
          />
        ) : (
          item.estimatedProfit
        )}
      </div>
    </>
  );
};
