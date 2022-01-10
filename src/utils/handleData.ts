import { CheckItemType } from '../components/SDS/common/CheckItem';

const handleData = (data: CheckItemType[], name: string) => {
  const newData: CheckItemType = {};
  data.forEach((item) => (newData[item[`${name}Id`]] = item));
  return newData;
};

export default handleData;
