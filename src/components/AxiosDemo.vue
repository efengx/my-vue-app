<template>
    <div>
        <div>AxiosDemo-{{this.demo.name}}</div>
        <Button @click="change">change name</Button>
        <div v-for="(d, index) in demo.projects" :key="index">
            <span>{{d.id}}</span>-<span>{{d.name}}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class'

@Component
export default class AxiosDemo extends Vue {
    @State((state) => state.axiosDemoMod) private demo: any
    @Action('axiosDemoMod/changeName') private changeName: any
    @Action('axiosDemoMod/getDemo') private getDemo: any

    // created() {
    //     this.getDemo();
    // }

    private change(){
        this.changeName()
        this.getDemo({param: 'param1'})
    }

}
</script>