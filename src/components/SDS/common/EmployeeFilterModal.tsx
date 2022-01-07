import styled from '@emotion/styled';
import React, { useState } from 'react';
import EmployeeFilterList from './EmployeeFilterList';
import { CheckItemType } from './CheckItem';
import Modal from './Modal';
import PositionCheckList from './PositionCheckList';
import GradeCheckList from './GradeCheckList';

interface EmployeeFilterModalProps {
  isOpened: boolean;
  // 임시
  groupList: CheckItemType[];
  positionList: CheckItemType[];
  gradeList: CheckItemType[];
}

const EmployeeFilterModal = ({
  isOpened,
  groupList,
  positionList,
  gradeList,
}: EmployeeFilterModalProps) => {
  // const [groupList, setGroupList] = useState([]);
  // const [positionList, setPositionList] = useState([]);
  // const [gradeList, setGradeList] = useState([]);
  const [currentType, setCurrentType] = useState<
    '그룹' | '직급' | '등급' | null
  >(null);

  const handleType = (e?: React.MouseEvent<HTMLElement>) => {
    const { id } = e?.currentTarget as HTMLLIElement;
    setCurrentType(id as '그룹' | '직급' | '등급' | null);
  };

  const handleCheck = () => {
    console.log('check');
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
