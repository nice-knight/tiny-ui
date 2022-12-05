import { test, expect } from "@playwright/experimental-ct-vue";
import { {{componentName}} } from "../index";

test.use({
    viewport: {
        width: 400,
        height: 400,
    },
});

test('render',async  ({mount } :any) => {
    const component = await mount(<{{componentName}}>1</{{componentName}}>);
    await expect(component).toContainText("1");
});


  

