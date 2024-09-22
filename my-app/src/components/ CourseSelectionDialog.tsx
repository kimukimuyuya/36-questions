import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import React, { useState } from "react"
import { useRouter } from 'next/router'
import useQuestionsStore from '@/store/questionsStore';

function CourseSelectionDialog() {
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState('30min');
  const setQuestions = useQuestionsStore(state => state.setQuestions);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCourse(event.target.value);
  };

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/questions?course=${selectedCourse}`);
      const data = await response.json();
      setQuestions(data.questions);
      router.push(`/questions?course=${selectedCourse}`);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (  
    <div>
      { loading && (
        <div className='fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-bgColor'>
          <div className="loader"></div>
        </div>
      )}
      <Dialog>
        <DialogTrigger asChild>
          <Button className='p-5 text-md bg-baseColor hover:bg-baseColor'>
            コースを選択
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[90%] sm:max-w-md mx-auto rounded-lg bg-bgColor">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">コースを選択してください</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center my-4 text-md">
            <fieldset className="radio-3">
              <label>
                <input
                  type="radio"
                  name="radio-3"
                  value="30min"
                  checked={selectedCourse === '30min'}
                  onChange={handleChange}
                />
                30分(5問)
              </label>
              <label>
                <input
                  type="radio"
                  name="radio-3"
                  value="1hour"
                  checked={selectedCourse === '1hour'}
                  onChange={handleChange}
                />
                1時間(10問)
              </label>
              <label>
                <input
                  type="radio"
                  name="radio-3"
                  value="2hours"
                  checked={selectedCourse === '2hours'}
                  onChange={handleChange}
                />
                2時間(18問)
              </label>
              <label>
                <input
                  type="radio"
                  name="radio-3"
                  value="4hours"
                  checked={selectedCourse === '4hours'}
                  onChange={handleChange}
                />
                4時間(36問)
              </label>
            </fieldset>
          </div>
          <DialogFooter className="flex justify-center items-center">
            <DialogClose asChild>
              <Button type="button" className=" w-3/4 text-sm bg-baseColor hover:bg-baseColor" onClick={handleButtonClick}>
                始める
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CourseSelectionDialog

