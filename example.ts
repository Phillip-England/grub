import { Grub } from "./src/Grub";
import { Cmd } from "./src/Cmd";

export let help = new Cmd('help');
help.setAsDefault();
help.setOperation(async () => {
  console.log('welcome to grub!')
  console.log('the ultimate cli builder!')
})

let cli = new Grub(help)
try {
  await cli.run();
} catch (err: any) {
  console.error(err.message);
}
