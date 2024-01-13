import { useEffect, useState } from "react";
import { useFetchEntityDataQuery } from "../api";
import { ChildMainContent } from "./ChildMainContent";
import { item } from "../shared/interfaces/item.interface";

import "./MainContent.style.scss";

export const MainContent = () => {
  const { data, isFetching } = useFetchEntityDataQuery(null);
  const [allData, setAllData] = useState<item[]>(data);

  useEffect(() => {
    setAllData(data);
  }, [data]);
  return (
    <div className="wrapper-main">
      {isFetching ? (
        <div className="loading">
          <div>Loading...</div>
        </div>
      ) : (
        <div className="list-expenses">
          <div className="list-expenses-item">Уровень</div>
          <div className="list-expenses-item">Наименование работ</div>
          <div className="list-expenses-item">Основная</div>
          <div className="list-expenses-item">Оборудование</div>
          <div className="list-expenses-item">Накладные</div>
          <div className="list-expenses-item">Сметная прибыль</div>
          {allData?.map((item: item) => (
            <ChildMainContent
              key={item.id}
              item={item}
              nestingLevel={0}
              allData={allData}
              setAllData={setAllData}
            />
          ))}
        </div>
      )}
    </div>
  );
};
