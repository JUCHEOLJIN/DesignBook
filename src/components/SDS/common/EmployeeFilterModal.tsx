import styled from '@emotion/styled';
import React, { useState } from 'react';
import EmployeeFilterList from './EmployeeFilterList';
import { CheckItemType } from './CheckItem';
import Modal from './Modal';
import PositionCheckList from './PositionCheckList';
import GradeCheckList from './GradeCheckList';
import { USER_GRADE, USER_POSITION, ADMIN_GROUP } from '../../../utils/lists';
import handleData from '../../../utils/handleData';
import GroupCheckList from './GroupCheckList';

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
  const [isTopDownCheck, setIsTopDownCheck] = useState(false);
  const [closedToggles, setClosedToggles] = useState<string[]>([]);

  /**
   * 필터를 선택하는 함수. 그룹 / 직급 / 등급
   */
  const handleType = (e?: React.MouseEvent<HTMLElement>) => {
    const { id } = e?.currentTarget as HTMLLIElement;
    setCurrentType(id as '그룹' | '직급' | '등급' | null);
  };

  /**
   * 가져올 리스트를 리턴해주는 함수
   */
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
  /**
   *  리스트가 종류에 따라 setter 함수가 동작하도록 하는 함수
   * @param name position / group / userGrade / topDownGroup
   * @param checked 체크된 아이템을 받습니다.
   */
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
      case 'topDownGroup':
        return setGroupList(checked);
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

  /**
   * 검색창을 지우는 동작을 하는 함수.
   */
  const closeSearch = (name: string) => {
    switch (name) {
      case 'position':
        setPositionSearchValue('');
        break;
      case 'group':
        setGroupSearchValue('');
        break;
      case 'userGrade':
        setUserGradeSearchValue('');
        break;
      default:
        throw new Error(`${name} is invalid parameter`);
    }
  };
  /**
   * 하위크룹 한번에 체크 시에 체크리스트 순회하면서 자동으로 하위그룹 체크
   */
  const onTopDownCheck = () => {
    const checkedIdList = Object.keys(groupList).filter(
      (key) => groupList[key].isChecked,
    );
    let arrayList = Object.values(groupList);

    checkedIdList.forEach((id) => {
      const checkedArrayList = arrayList.map((item) => {
        if (!item.groupDepth.includes(id)) {
          return item;
        }
        return { ...item, isChecked: true };
      });

      arrayList = checkedArrayList;
    });

    setGroupList(handleData(arrayList, 'group'));
  };

  /**
   * 하위그룹도 한번에 체크
   */
  const handleTopDownCheck = () => {
    setIsTopDownCheck((prev) => !prev);
    onTopDownCheck();
  };

  const handleToggle = (id: string) => {
    setClosedToggles((prev) => {
      if (closedToggles.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
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
            closeSearch={closeSearch}
            value={positionSearchValue}
          />
        )}
        {currentType === '등급' && gradeList && (
          <GradeCheckList
            list={gradeList}
            onClick={handleCheck}
            handleSearch={handleSearch}
            closeSearch={closeSearch}
            value={userGradeSearchValue}
          />
        )}
        {currentType === '그룹' && groupList && (
          <GroupCheckList
            list={groupList}
            value={groupSearchValue}
            isTopDownCheck={isTopDownCheck}
            closedToggles={closedToggles}
            onClick={handleCheck}
            handleSearch={handleSearch}
            closeSearch={closeSearch}
            handleTopDownCheck={handleTopDownCheck}
            setTargetList={setTargetList}
            handleToggle={handleToggle}
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
