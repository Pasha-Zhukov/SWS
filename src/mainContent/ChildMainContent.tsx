import React, { useState, useEffect } from "react";
import {
  useCreateRowMutation,
  useDeleteRowMutation,
  useFetchEntityDataQuery,
  useUpdateRowMutation,
} from "../api";
import createRowLocal from "../utils/createRowLocal";
import { ChildMainContentButtonGroup } from "../components/childMainContentButtonGroup/ChildMainContentButtonGroup";
import { ChildMainContentItem } from "../components/childMainContentItem/ChildMainContentItem";
import { item } from "../shared/interfaces/item.interface";

interface ChildMainContentProps {
  item: item;
  nestingLevel: number;
  setAllData?: (data: item[]) => void;
  allData: item[];
}

export const ChildMainContent: React.FC<ChildMainContentProps> = ({
  item,
  nestingLevel,
  setAllData,
  allData,
}) => {
  const [updateRow, { isSuccess: isSuccessUpdate }] = useUpdateRowMutation();
  const [deleteRow, { isSuccess: isSuccessDelete }] = useDeleteRowMutation();
  const [createRow, { isSuccess: isSuccessDCreate }] = useCreateRowMutation();
  const { refetch } = useFetchEntityDataQuery(null);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [editedRowName, setEditedRowName] = useState<string>(item.rowName);
  const [editedSalary, setEditedSalary] = useState<number>(item.salary);
  const [editedEquipmentCosts, setEditedEquipmentCosts] = useState<number>(
    item.equipmentCosts
  );
  const [editedOverheads, setEditedOverheads] = useState<number>(
    item.overheads
  );
  const [editedEstimatedProfit, setEditedEstimatedProfit] = useState<number>(
    item.estimatedProfit
  );

  useEffect(() => {
    setEditedRowName(item.rowName);
    setEditedSalary(item.salary);
    setEditedEquipmentCosts(item.equipmentCosts);
    setEditedOverheads(item.overheads);
    setEditedEstimatedProfit(item.estimatedProfit);
  }, [allData]);

  useEffect(() => {
    if (isSuccessDelete || isSuccessDCreate || isSuccessUpdate) {
      refetch();
    }
  }, [isSuccessDelete, isSuccessDCreate, isSuccessUpdate]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEditedRowName(item.rowName);
      if (item.id > 100) {
        setIsEditing(false);
        updateRow({
          updatedData: {
            equipmentCosts: editedEquipmentCosts,
            estimatedProfit: editedEstimatedProfit,
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            overheads: editedOverheads,
            rowName: editedRowName,
            salary: editedSalary,
            supportCosts: 0,
          },
          rID: item.id,
        });
      } else {
        createRow({
          data: {
            equipmentCosts: editedEquipmentCosts,
            estimatedProfit: editedEstimatedProfit,
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            parentId: item.idParent,
            mimExploitation: 0,
            overheads: editedOverheads,
            rowName: editedRowName,
            salary: editedSalary,
            supportCosts: 0,
          },
        });
      }

      setIsEditing(false);
    }
  };

  return (
    <>
      <div
        key={item.id}
        className="list-expenses-item"
        style={{ marginLeft: `${nestingLevel * 20}px` }}
      >
        <ChildMainContentButtonGroup
          itemId={item.id}
          allData={allData}
          deleteRow={deleteRow}
          setAllData={setAllData}
          createRowLocal={createRowLocal}
        />
      </div>
      <ChildMainContentItem
        item={item}
        isEditing={isEditing}
        editedRowName={editedRowName}
        editedSalary={editedSalary}
        editedEquipmentCosts={editedEquipmentCosts}
        editedOverheads={editedOverheads}
        editedEstimatedProfit={editedEstimatedProfit}
        handleDoubleClick={handleDoubleClick}
        handleInputKeyPress={handleInputKeyPress}
        setEditedRowName={setEditedRowName}
        setEditedSalary={setEditedSalary}
        setEditedEquipmentCosts={setEditedEquipmentCosts}
        setEditedOverheads={setEditedOverheads}
        setEditedEstimatedProfit={setEditedEstimatedProfit}
      />
      {item.child?.length > 0 &&
        item.child.map((childItem: item) => (
          <ChildMainContent
            key={childItem.id}
            item={childItem}
            nestingLevel={nestingLevel + 1}
            setAllData={setAllData}
            allData={allData}
          />
        ))}
    </>
  );
};
