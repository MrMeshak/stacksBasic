import React, {useState} from 'react';
import Stack from '../Stack/Stack';
import * as S from './LibraryPage.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { useAppDispatch,useAppSelector } from '../../../store/hooks';
import { libraryActions } from '../../../store/library/librarySlice';
import { testLibrary } from '../../../utils/libraryMockData';
import { useSelector } from 'react-redux';
import { IStack } from '../../../store/library/libraryModels';
import {fetchLibrary} from '../../../store/library/librarySlice'
import AddStackForm from '../../../components/forms/LibraryForms/AddStackForm';

export interface ILibraryProps {
}

export default function Library (props: ILibraryProps) {
  const [addStackFormOpen, setAddStackFormOpen] = useState(false)
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLibrary())
  },[])

  const library = useAppSelector((state) => {
    return state.library.library
  })

  const toggleAddStackForm = ()=>{
    if(addStackFormOpen){
      setAddStackFormOpen(false)
      return
    }
    setAddStackFormOpen(true)
  }

  const handleAddStackBtn = () => {
    toggleAddStackForm()
  }

  return (
    <>
      <S.LibraryNameContainer>
        <S.LibraryName>{library?.libraryDetails.name}</S.LibraryName>
        <S.AddStackFormContainer>
          {addStackFormOpen? <AddStackForm libraryId = {library? library._id : ""} setAddStackFormOpen={setAddStackFormOpen}/> : null}
        </S.AddStackFormContainer>
        <S.AddStackButton onClick={handleAddStackBtn}><FontAwesomeIcon icon={faPlus}/></S.AddStackButton>
        
      </S.LibraryNameContainer>
      
      <S.LibraryContainer>
        {library?.stacks.map((stack)=> <Stack libraryId={library._id} stack={stack} key={stack._id}/>)}
      </S.LibraryContainer>
    </>
   
  );
}
