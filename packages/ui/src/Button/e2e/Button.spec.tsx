import { test, expect } from "@playwright/experimental-ct-vue";
import {Button} from "../index";

test.use({
    viewport: {
        width: 400,
        height: 400,
    },
});

test('render',async  ({mount}) => {
    const component = await mount(<Button>1</Button>);
    await expect(component).toContainText("1");
});


  

