import React, { useState } from 'react';
import EmployeeFilterList from './EmployeeFilterList';
import Modal from './Modal';

interface EmployeeFilterModalProps {
  isOpened: boolean;
}

const EmployeeFilterModal = (props: EmployeeFilterModalProps) => {
  const [groupList, setGroupList] = useState([]);
  const [positionList, setPositionList] = useState([]);
  const [gradeList, setGradeList] = useState([]);
  const [currentType, setCurrentType] = useState<
    '그룹' | '직급' | '등급' | null
  >(null);
  const onClick = (e?: React.MouseEvent<HTMLElement>) => {
    const { id } = e?.currentTarget as HTMLLIElement;
    setCurrentType(id as '그룹' | '직급' | '등급' | null);
  };

  return (
    <Modal
      title="직원필터"
      cancellable
      confirmText="적용"
      cancelText="취소"
      isOpened={props.isOpened}
    >
      <EmployeeFilterList
        onClick={onClick}
        groupList={groupList}
        positionList={positionList}
        gradeList={gradeList}
        currentType={currentType}
      />
    </Modal>
  );
};

export default EmployeeFilterModal;
