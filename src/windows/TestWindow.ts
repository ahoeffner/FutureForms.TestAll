import { Window } from "futureforms";

export class TestWindow extends Window
{
   constructor(view:HTMLElement)
   {
      super(view);
      console.log("TestWindow created")
   }
}