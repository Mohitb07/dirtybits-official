import { atom } from 'recoil';

export interface IFilterData {
  difficulty: string;
  tags: string[];
}

const defaultData = {
  difficulty: '',
  tags: [],
};

export const filterData = atom<IFilterData>({
  key: 'filterData',
  default: defaultData,
});
