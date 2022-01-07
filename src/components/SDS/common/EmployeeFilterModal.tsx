import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import EmployeeFilterList from './EmployeeFilterList';
import { CheckItemType } from './CheckItem';
import Modal from './Modal';
import PositionCheckList from './PositionCheckList';
import GradeCheckList from './GradeCheckList';
import { USER_GRADE, USER_POSITION, ADMIN_GROUP } from '../../../utils/lists';

interface EmployeeFilterModalProps {
  isOpened: boolean;
}

const EmployeeFilterModal = ({ isOpened }: EmployeeFilterModalProps) => {
  const [groupList, setGroupList] = useState<CheckItemType[]>(
    ADMIN_GROUP.selectList,
  );
  const [positionList, setPositionList] = useState<CheckItemType[]>(
    USER_POSITION.list,
  );
  const [gradeList, setGradeList] = useState<CheckItemType[]>(USER_GRADE.list);
  const [currentType, setCurrentType] = useState<
    '그룹' | '직급' | '등급' | null
  >(null);

  const handleType = (e?: React.MouseEvent<HTMLElement>) => {
    const { id } = e?.currentTarget as HTMLLIElement;
    setCurrentType(id as '그룹' | '직급' | '등급' | null);
  };

  const getTargetList = (name: string) => {
    switch (name) {
      case 'position':
        return [...positionList];
      case 'group':
        return [...groupList];
      case 'userGrade':
        return [...gradeList];
      default:
        throw new Error(`${name} is invalid parameter`);
    }
  };

  const setTargetList = (name: string, checked: CheckItemType[]) => {
    switch (name) {
      case 'position':
        return setPositionList(checked);
      case 'group':
        return setGroupList(checked);
      case 'userGrade':
        return setGradeList(checked);
      default:
        throw new Error(`${name} is invalid parameter`);
    }
  };

  const handleCheck = (e: React.MouseEvent<HTMLElement>, name: string) => {
    const { id } = e?.currentTarget as HTMLLIElement;
    const checked = getTargetList(name).map((item: CheckItemType) => {
      if (item[`${name}Id`] !== id) {
        return item;
      } else {
        return { ...item, isChecked: !item.isChecked };
      }
    });
    setTargetList(name, checked);
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
          <PositionCheckList list={positionList} onClick={handleCheck} />
        )}
        {currentType === '등급' && gradeList && (
          <GradeCheckList list={gradeList} onClick={handleCheck} />
        )}
      </Wrapper>
    </Modal>
  );
};

export default EmployeeFilterModal;

const Wrapper = styled.section`
  display: flex;
`;
