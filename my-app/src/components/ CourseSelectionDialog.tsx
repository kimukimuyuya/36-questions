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

function DialogCloseButton() {
  const [selectedValue, setSelectedValue] = useState('5');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(selectedValue);
  };

  return (
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
                value="5"
                checked={selectedValue === '5'}
                onChange={handleChange}
              />
              30分(5問)
            </label>
            <label>
              <input
                type="radio"
                name="radio-3"
                value="10"
                checked={selectedValue === '10'}
                onChange={handleChange}
              />
              1時間(10問)
            </label>
            <label>
              <input
                type="radio"
                name="radio-3"
                value="18"
                checked={selectedValue === '18'}
                onChange={handleChange}
              />
              2時間(18問)
            </label>
            <label>
              <input
                type="radio"
                name="radio-3"
                value="36"
                checked={selectedValue === '36'}
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
  )
}

export default DialogCloseButton

