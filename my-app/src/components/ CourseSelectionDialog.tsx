import { CopyIcon } from "@radix-ui/react-icons"

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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='p-5 text-md bg-baseColor hover:bg-baseColor'>
          コースを選択
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] sm:max-w-md mx-auto rounded-lg">
        <DialogHeader>
          <DialogTitle>コースを選択してください</DialogTitle>
        </DialogHeader>
        {/* <div className="flex items-center space-x-2"> */}
        <fieldset className="radio-3">
          <label>
            <input type="radio" name="radio-3" />
            radio1
          </label>
          <label>
            <input type="radio" name="radio-3" />
            radio2
          </label>
          <label>
            <input type="radio" name="radio-3" />
            radio3
          </label>
        </fieldset>
        {/* </div> */}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DialogCloseButton

