import { IReportFeeds } from '../../utils/types';
import ReportStyle from './report-feeds.module.css';
import { FC } from 'react';

export const ReportFeeds: FC<IReportFeeds> = ({
  statusOrders,
  total,
  totalToday
}) => {
  return (
    <div className={`${ReportStyle.container} mt-25 ml-15`}>
      <div className={`${ReportStyle.headings} mb-6`}>
        <h3 className={`${ReportStyle.heading}`}>Готовы:</h3>
        <h3 className={`${ReportStyle.heading}`}>В работе:</h3>
      </div>
      <div className={`${ReportStyle.numbers}`}>
        <ul className={`${ReportStyle.list}`}>
          {statusOrders?.done?.map((element) => {
            return (
              <li
                key={element}
                className={`${ReportStyle.number} text text_type_digits-default`}
              >
                <span>{element}</span>
              </li>
            );
          })}
        </ul>
        <ul className={`${ReportStyle.list}`}>
          {statusOrders?.pending?.map((element) => {
            return (
              <li
                key={element}
                className={`${ReportStyle.number} text text_type_digits-default`}
              >
                <span>{element}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <p className={`text text_type_main-medium mt-15 mb-0`}>
        Выполнено за все время:
      </p>
      <p className={`text text_type_digits-large`}>{total}</p>
      <p className={`text text_type_main-medium mt-15 mb-0`}>
        Выполнено за сегодня:
      </p>
      <p className={`text text_type_digits-large`}>{totalToday}</p>
    </div>
  );
};
