import { defineComponent } from "vue";
export default defineComponent({
    name: Tiny{{ componentName }}
    setup(props, { slots, attrs }){
        return ()=> (
            <>
                <div>{slots.default && slots.default()}</div>
            </>
        )
    }
})
