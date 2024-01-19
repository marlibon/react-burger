// import { TapeFeed } from '../../components/tape-feed/tape-feed';
// import { ReportFeeds } from '../../components/report-feeds/report-feeds';
// import { addStatusOrders } from '../../services/feed/feed-slice';
// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../../utils/hooks/hook';

import { ReportFeeds } from '../../report-feeds/report-feeds';
import { TapeFeed } from '../../tape-feed/tape-feed';

export function Feeds() {
  // const dispatch = useAppDispatch();
  // const feeds = useAppSelector((state) => state.feed.feeds)
  // const statusOrders = useAppSelector((state) => state.feed.statusOrders)
  // const total = useAppSelector((state) => state.feed.total)
  // const totalToday = useAppSelector((state) => state.feed.totalToday)
  const feeds = [
    {
      _id: '65aa8c0487899c001b829e64',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Антарианский флюоресцентный space бургер',
      createdAt: '2024-01-19T14:49:40.788Z',
      updatedAt: '2024-01-19T14:49:41.403Z',
      number: 32105
    },
    {
      _id: '65aa8bea87899c001b829e63',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Spicy флюоресцентный space бургер',
      createdAt: '2024-01-19T14:49:14.186Z',
      updatedAt: '2024-01-19T14:49:14.651Z',
      number: 32104
    },
    {
      _id: '65aa8bd287899c001b829e62',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Антарианский spicy флюоресцентный space бургер',
      createdAt: '2024-01-19T14:48:50.585Z',
      updatedAt: '2024-01-19T14:48:51.134Z',
      number: 32103
    },
    {
      _id: '65aa8ac287899c001b829e54',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Антарианский spicy флюоресцентный space бургер',
      createdAt: '2024-01-19T14:44:18.433Z',
      updatedAt: '2024-01-19T14:44:18.922Z',
      number: 32102
    },
    {
      _id: '65aa873a87899c001b829e20',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Флюоресцентный space бургер',
      createdAt: '2024-01-19T14:29:14.920Z',
      updatedAt: '2024-01-19T14:29:15.359Z',
      number: 32101
    },
    {
      _id: '65aa86fa87899c001b829e1b',
      ingredients: [
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943'
      ],
      status: 'done',
      name: 'Spicy люминесцентный флюоресцентный space бургер',
      createdAt: '2024-01-19T14:28:10.159Z',
      updatedAt: '2024-01-19T14:28:10.668Z',
      number: 32100
    },
    {
      _id: '65aa869087899c001b829e15',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный метеоритный бургер',
      createdAt: '2024-01-19T14:26:24.525Z',
      updatedAt: '2024-01-19T14:26:25.167Z',
      number: 32099
    },
    {
      _id: '65aa7ba487899c001b829def',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный метеоритный бургер',
      createdAt: '2024-01-19T13:39:48.055Z',
      updatedAt: '2024-01-19T13:39:48.571Z',
      number: 32098
    },
    {
      _id: '65aa7a4687899c001b829deb',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный метеоритный бургер',
      createdAt: '2024-01-19T13:33:58.187Z',
      updatedAt: '2024-01-19T13:33:58.656Z',
      number: 32097
    },
    {
      _id: '65aa770b87899c001b829de6',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Spicy флюоресцентный space бургер',
      createdAt: '2024-01-19T13:20:11.083Z',
      updatedAt: '2024-01-19T13:20:11.610Z',
      number: 32096
    },
    {
      _id: '65aa68c987899c001b829dd6',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный space бургер',
      createdAt: '2024-01-19T12:19:21.386Z',
      updatedAt: '2024-01-19T12:19:21.941Z',
      number: 32095
    },
    {
      _id: '65aa5e6e87899c001b829dc2',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Метеоритный space антарианский spicy люминесцентный флюоресцентный традиционный-галактический бургер',
      createdAt: '2024-01-19T11:35:10.988Z',
      updatedAt: '2024-01-19T11:35:11.448Z',
      number: 32094
    },
    {
      _id: '65aa5e4b87899c001b829dc1',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space антарианский spicy био-марсианский люминесцентный флюоресцентный традиционный-галактический бургер',
      createdAt: '2024-01-19T11:34:35.419Z',
      updatedAt: '2024-01-19T11:34:35.859Z',
      number: 32093
    },
    {
      _id: '65aa5b3387899c001b829dbc',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Антарианский spicy флюоресцентный space бургер',
      createdAt: '2024-01-19T11:21:23.216Z',
      updatedAt: '2024-01-19T11:21:23.658Z',
      number: 32092
    },
    {
      _id: '65aa592887899c001b829daf',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa0948',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942'
      ],
      status: 'done',
      name: 'Фалленианский экзо-плантаго метеоритный space антарианский spicy альфа-сахаридный астероидный био-марсианский минеральный бессмертный люминесцентный флюоресцентный традиционный-галактический бургер',
      createdAt: '2024-01-19T11:12:40.133Z',
      updatedAt: '2024-01-19T11:12:40.459Z',
      number: 32091
    },
    {
      _id: '65aa58f587899c001b829dac',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Флюоресцентный space бургер',
      createdAt: '2024-01-19T11:11:49.655Z',
      updatedAt: '2024-01-19T11:11:50.263Z',
      number: 32090
    },
    {
      _id: '65aa58e987899c001b829daa',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Флюоресцентный space бургер',
      createdAt: '2024-01-19T11:11:37.879Z',
      updatedAt: '2024-01-19T11:11:38.400Z',
      number: 32089
    },
    {
      _id: '65aa568587899c001b829d9b',
      ingredients: ['643d69a5c3f7b9001cfa0943', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный space бургер',
      createdAt: '2024-01-19T11:01:25.979Z',
      updatedAt: '2024-01-19T11:01:26.443Z',
      number: 32088
    },
    {
      _id: '65aa51ad87899c001b829d92',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный space бургер',
      createdAt: '2024-01-19T10:40:45.879Z',
      updatedAt: '2024-01-19T10:40:46.313Z',
      number: 32087
    },
    {
      _id: '65aa501a87899c001b829d90',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный space бургер',
      createdAt: '2024-01-19T10:34:02.587Z',
      updatedAt: '2024-01-19T10:34:03.133Z',
      number: 32086
    },
    {
      _id: '65aa4fc387899c001b829d8e',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Антарианский флюоресцентный бургер',
      createdAt: '2024-01-19T10:32:35.279Z',
      updatedAt: '2024-01-19T10:32:35.810Z',
      number: 32085
    },
    {
      _id: '65a9c62387899c001b829cc9',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный люминесцентный антарианский традиционный-галактический бургер',
      createdAt: '2024-01-19T00:45:23.379Z',
      updatedAt: '2024-01-19T00:45:23.813Z',
      number: 32084
    },
    {
      _id: '65a9c4c587899c001b829cc5',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space антарианский spicy био-марсианский люминесцентный флюоресцентный бургер',
      createdAt: '2024-01-19T00:39:33.193Z',
      updatedAt: '2024-01-19T00:39:33.622Z',
      number: 32083
    },
    {
      _id: '65a9c49087899c001b829cc4',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space био-марсианский флюоресцентный люминесцентный антарианский бургер',
      createdAt: '2024-01-19T00:38:40.756Z',
      updatedAt: '2024-01-19T00:38:41.326Z',
      number: 32082
    },
    {
      _id: '65a9c44e87899c001b829cc3',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space антарианский spicy био-марсианский люминесцентный флюоресцентный бургер',
      createdAt: '2024-01-19T00:37:34.579Z',
      updatedAt: '2024-01-19T00:37:35.095Z',
      number: 32081
    },
    {
      _id: '65a9c34287899c001b829cc1',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space spicy био-марсианский люминесцентный флюоресцентный традиционный-галактический бургер',
      createdAt: '2024-01-19T00:33:06.074Z',
      updatedAt: '2024-01-19T00:33:06.563Z',
      number: 32080
    },
    {
      _id: '65a9b8f187899c001b829cb9',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Антарианский spicy флюоресцентный space бургер',
      createdAt: '2024-01-18T23:49:05.610Z',
      updatedAt: '2024-01-18T23:49:06.812Z',
      number: 32079
    },
    {
      _id: '65a9b8f187899c001b829cb8',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Антарианский spicy флюоресцентный space бургер',
      createdAt: '2024-01-18T23:49:05.268Z',
      updatedAt: '2024-01-18T23:49:06.435Z',
      number: 32078
    },
    {
      _id: '65a9b8f087899c001b829cb7',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Антарианский spicy флюоресцентный space бургер',
      createdAt: '2024-01-18T23:49:04.644Z',
      updatedAt: '2024-01-18T23:49:05.229Z',
      number: 32077
    },
    {
      _id: '65a9b8ef87899c001b829cb6',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Антарианский spicy флюоресцентный space бургер',
      createdAt: '2024-01-18T23:49:03.283Z',
      updatedAt: '2024-01-18T23:49:03.841Z',
      number: 32076
    },
    {
      _id: '65a9b8eb87899c001b829cb5',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Антарианский spicy флюоресцентный space бургер',
      createdAt: '2024-01-18T23:48:59.875Z',
      updatedAt: '2024-01-18T23:49:00.435Z',
      number: 32075
    },
    {
      _id: '65a9b4e187899c001b829cb2',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space spicy флюоресцентный люминесцентный антарианский бургер',
      createdAt: '2024-01-18T23:31:45.230Z',
      updatedAt: '2024-01-18T23:31:45.653Z',
      number: 32074
    },
    {
      _id: '65a9a35887899c001b829c97',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Фалленианский люминесцентный флюоресцентный метеоритный бургер',
      createdAt: '2024-01-18T22:16:56.259Z',
      updatedAt: '2024-01-18T22:16:56.760Z',
      number: 32073
    },
    {
      _id: '65a9a0a787899c001b829c93',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Бессмертный люминесцентный флюоресцентный бургер',
      createdAt: '2024-01-18T22:05:27.610Z',
      updatedAt: '2024-01-18T22:05:28.223Z',
      number: 32072
    },
    {
      _id: '65a9a06287899c001b829c92',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space антарианский био-марсианский люминесцентный флюоресцентный традиционный-галактический бургер',
      createdAt: '2024-01-18T22:04:18.667Z',
      updatedAt: '2024-01-18T22:04:19.217Z',
      number: 32071
    },
    {
      _id: '65a99e6987899c001b829c8f',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Антарианский краторный space бургер',
      createdAt: '2024-01-18T21:55:53.281Z',
      updatedAt: '2024-01-18T21:55:53.880Z',
      number: 32070
    },
    {
      _id: '65a99e6587899c001b829c8d',
      ingredients: [
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Фалленианский экзо-плантаго краторный бургер',
      createdAt: '2024-01-18T21:55:49.589Z',
      updatedAt: '2024-01-18T21:55:50.169Z',
      number: 32069
    },
    {
      _id: '65a990a387899c001b829c6b',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space spicy био-марсианский флюоресцентный антарианский бургер',
      createdAt: '2024-01-18T20:57:07.435Z',
      updatedAt: '2024-01-18T20:57:07.874Z',
      number: 32068
    },
    {
      _id: '65a98fe087899c001b829c68',
      ingredients: [
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space spicy био-марсианский люминесцентный флюоресцентный бургер',
      createdAt: '2024-01-18T20:53:52.049Z',
      updatedAt: '2024-01-18T20:53:52.540Z',
      number: 32067
    },
    {
      _id: '65a98e2487899c001b829c60',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Традиционный-галактический spicy флюоресцентный space бургер',
      createdAt: '2024-01-18T20:46:28.570Z',
      updatedAt: '2024-01-18T20:46:29.024Z',
      number: 32066
    },
    {
      _id: '65a98dbf87899c001b829c5d',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0948',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa093e'
      ],
      status: 'done',
      name: 'Фалленианский экзо-плантаго альфа-сахаридный краторный астероидный минеральный люминесцентный бургер',
      createdAt: '2024-01-18T20:44:47.374Z',
      updatedAt: '2024-01-18T20:44:47.865Z',
      number: 32065
    },
    {
      _id: '65a98d9987899c001b829c5c',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa0947'
      ],
      status: 'done',
      name: 'Фалленианский метеоритный краторный био-марсианский бессмертный люминесцентный бургер',
      createdAt: '2024-01-18T20:44:09.468Z',
      updatedAt: '2024-01-18T20:44:09.955Z',
      number: 32064
    },
    {
      _id: '65a98cdb87899c001b829c5a',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0948',
        '643d69a5c3f7b9001cfa094a'
      ],
      status: 'done',
      name: 'Фалленианский экзо-плантаго метеоритный space spicy краторный альфа-сахаридный астероидный био-марсианский минеральный бессмертный люминесцентный антарианский традиционный-галактический бургер',
      createdAt: '2024-01-18T20:40:59.842Z',
      updatedAt: '2024-01-18T20:41:00.419Z',
      number: 32063
    },
    {
      _id: '65a988e887899c001b829c56',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный space бургер',
      createdAt: '2024-01-18T20:24:08.573Z',
      updatedAt: '2024-01-18T20:24:09.036Z',
      number: 32062
    },
    {
      _id: '65a97ffb87899c001b829c4d',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Антарианский краторный space бургер',
      createdAt: '2024-01-18T19:46:03.444Z',
      updatedAt: '2024-01-18T19:46:04.213Z',
      number: 32061
    },
    {
      _id: '65a97ef187899c001b829c48',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Экзо-плантаго spicy био-марсианский бессмертный флюоресцентный бургер',
      createdAt: '2024-01-18T19:41:37.473Z',
      updatedAt: '2024-01-18T19:41:37.935Z',
      number: 32060
    },
    {
      _id: '65a97a6587899c001b829c3b',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Spicy флюоресцентный space бургер',
      createdAt: '2024-01-18T19:22:13.353Z',
      updatedAt: '2024-01-18T19:22:13.861Z',
      number: 32059
    },
    {
      _id: '65a9778887899c001b829c37',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный space бургер',
      createdAt: '2024-01-18T19:10:00.266Z',
      updatedAt: '2024-01-18T19:10:00.774Z',
      number: 32058
    },
    {
      _id: '65a9771a87899c001b829c36',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный space бургер',
      createdAt: '2024-01-18T19:08:10.305Z',
      updatedAt: '2024-01-18T19:08:10.771Z',
      number: 32057
    },
    {
      _id: '65a9705987899c001b829c28',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Антарианский флюоресцентный space бургер',
      createdAt: '2024-01-18T18:39:21.837Z',
      updatedAt: '2024-01-18T18:39:22.229Z',
      number: 32056
    }
  ];
  const statusOrders = {
    done: [
      32105, 32104, 32103, 32102, 32101, 32100, 32099, 32098, 32097, 32096,
      32095, 32094, 32093, 32092, 32091, 32090, 32089, 32088, 32087, 32086,
      32085, 32084, 32083, 32082, 32081, 32080, 32079, 32078, 32077, 32076,
      32075, 32074, 32073, 32072, 32071, 32070, 32069, 32068, 32067, 32066,
      32065, 32064, 32063, 32062, 32061, 32060, 32059, 32058, 32057, 32056
    ],
    pending: []
  };
  const total = 31754;
  const totalToday = 75;
  // useEffect(() => {
  //   dispatch(addStatusOrders(feeds))
  // }, [feeds])

  return (
    <div style={{ display: 'flex' }}>
      <TapeFeed feeds={feeds}>
        <h2 className={`$text text_type_main-large`}>Лента заказов</h2>
      </TapeFeed>

      <ReportFeeds
        statusOrders={statusOrders}
        total={total}
        totalToday={totalToday}
      />
    </div>
  );
}
