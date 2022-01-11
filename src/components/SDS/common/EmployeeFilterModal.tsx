import styled from '@emotion/styled';
import React, { useState } from 'react';
import EmployeeFilterList from './EmployeeFilterList';
import { CheckItemType } from './CheckItem';
import Modal from './Modal';
import PositionCheckList from './PositionCheckList';
import GradeCheckList from './GradeCheckList';
import { USER_GRADE, USER_POSITION, ADMIN_GROUP } from '../../../utils/lists';
import handleData from '../../../utils/handleData';

interface EmployeeFilterModalProps {
  isOpened: boolean;
}

const EmployeeFilterModal = ({ isOpened }: EmployeeFilterModalProps) => {
  const [groupList, setGroupList] = useState<CheckItemType>(
    handleData(ADMIN_GROUP.selectList, 'group'),
  );
  const [positionList, setPositionList] = useState<CheckItemType>(
    handleData(USER_POSITION.list, 'position'),
  );
  const [gradeList, setGradeList] = useState<CheckItemType>(
    handleData(USER_GRADE.list, 'userGrade'),
  );
  const [currentType, setCurrentType] = useState<
    '그룹' | '직급' | '등급' | null
  >(null);

  const [positionSearchValue, setPositionSearchValue] = useState('');
  const [groupSearchValue, setGroupSearchValue] = useState('');
  const [userGradeSearchValue, setUserGradeSearchValue] = useState('');

  const handleType = (e?: React.MouseEvent<HTMLElement>) => {
    const { id } = e?.currentTarget as HTMLLIElement;
    setCurrentType(id as '그룹' | '직급' | '등급' | null);
  };

  const getTargetList = (name: string) => {
    switch (name) {
      case 'position':
        return { ...positionList };
      case 'group':
        return { ...groupList };
      case 'userGrade':
        return { ...gradeList };
      default:
        throw new Error(`${name} is invalid parameter`);
    }
  };

  const setTargetList = (name: string, checked: CheckItemType) => {
    switch (name) {
      case 'position':
        return setPositionList((position) => {
          const newPosition = { ...position, [checked[`${name}Id`]]: checked };
          return newPosition;
        });
      case 'group':
        return setGroupList((group) => {
          const newGroup = { ...group, [checked[`${name}Id`]]: checked };
          return newGroup;
        });
      case 'userGrade':
        return setGradeList((userGrade) => {
          const newUserGrade = {
            ...userGrade,
            [checked[`${name}Id`]]: checked,
          };
          return newUserGrade;
        });
      default:
        throw new Error(`${name} is invalid parameter`);
    }
  };

  const handleCheck = (e: React.MouseEvent<HTMLElement>, name: string) => {
    const { id } = e?.currentTarget as HTMLLIElement;
    const checked = {
      ...getTargetList(name)[id],
      isChecked: !getTargetList(name)[id].isChecked,
    };
    setTargetList(name, checked);
  };

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    const { value } = e?.target;
    switch (name) {
      case 'position':
        setPositionSearchValue(value);
        break;
      case 'group':
        setGroupSearchValue(value);
        break;
      case 'userGrade':
        setUserGradeSearchValue(value);
        break;
      default:
        throw new Error(`${name} is invalid parameter`);
    }
  };

  return (
    <Modal
      title="직원필터"
      cancellable
      confirmText="적용"
      cancelText="취소"
      isOpened={isOpened}
    >
      <Wrapper>
        <EmployeeFilterList
          onClick={handleType}
          groupList={groupList}
          positionList={positionList}
          gradeList={gradeList}
          currentType={currentType}
        />
        {currentType === '직급' && positionList && (
          <PositionCheckList
            list={positionList}
            onClick={handleCheck}
            handleSearch={handleSearch}
            value={positionSearchValue}
          />
        )}
        {currentType === '등급' && gradeList && (
          <GradeCheckList
            list={gradeList}
            onClick={handleCheck}
            handleSearch={handleSearch}
            value={userGradeSearchValue}
          />
        )}
      </Wrapper>
    </Modal>
  );
};

export default EmployeeFilterModal;

const Wrapper = styled.section`
  display: flex;
`;
