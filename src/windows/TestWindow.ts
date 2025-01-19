import { Window } from "futureforms";

export class TestWindow extends Window
{
	public static instances:TestWindow[] = [];


   constructor(view:HTMLElement)
   {
      super(view);
		TestWindow.instances.push(this);
      console.log("TestWindow created")
   }
}