import { TestForm } from './forms/TestForm';
import { CustomInput } from './tags/CustomInput';
import { TestWindow } from './windows/TestWindow';
import { Components, FormsModule, Parser, Properties, TagLibrary } from 'futureforms';


export class Application
{
   public static async initialize() : Promise<void>
   {
      TagLibrary.addCustomTag(CustomInput);

      Components.register("test",TestForm);
		Components.register("window",TestWindow)

      FormsModule.initialize();
      new Parser().parse();
   }
}