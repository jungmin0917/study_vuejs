// 이 파일은 라우터 설정 파일이다
// 여기서 필요한 views (컴포넌트)를 전부 import 해놓는다. (미리 즉시로딩해도 되고, 아래의 AboutView와 같이 지연로딩해도 됨)

import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from "@/views/DataBinding.vue";
import DataBindingHtml from "@/views/DataBindingHtml.vue"; // @/로 시작하면 루트 디렉토리부터 찾는다는 뜻의 Alias이다.
import DataBindingInputText from "@/views/DataBindingInputText.vue";
import DataBindingInputNumber from "@/views/DataBindingInputNumber.vue";
import DataBindingTextarea from "@/views/DataBindingTextarea.vue";
import DataBindingSelect from "@/views/DataBindingSelect.vue";
import DataBindingCheckbox from "@/views/DataBindingCheckbox.vue";
import DataBindingCheckbox2 from "@/views/DataBindingCheckbox2.vue";
import DataBindingRadio from "@/views/DataBindingRadio.vue";
import DataBindingAttribute from "@/views/DataBindingAttribute.vue";
import DataBindingButton from "@/views/DataBindingButton.vue";
import DataBindingClass from "@/views/DataBindingClass.vue";
import DataBindingClass2 from "@/views/DataBindingClass2.vue";
import DataBindingStyle from "@/views/DataBindingStyle.vue";
import DataBindingStyle2 from "@/views/DataBindingStyle2.vue";
import DataBindingList from "@/views/DataBindingList.vue";
import RenderingVIf from "@/views/RenderingVIf.vue";
import EventClick from "@/views/EventClick.vue";
import EventChange from "@/views/EventChange.vue";
import Computed from "@/views/Computed.vue";
import Watch from "@/views/Watch.vue";

import NestedComponent from "@/views/NestedComponent.vue";
import NestedComponent2 from "@/views/NestedComponent2.vue";
import ChildComponent from "@/views/ChildComponent.vue";
import ParentComponent from "@/views/ParentComponent.vue";
import ChildComponent2 from "@/views/ChildComponent2.vue";
import ParentComponent2 from "@/views/ParentComponent2.vue";
import ChildComponent3 from "@/views/ChildComponent3.vue";
import ParentComponent3 from "@/views/ParentComponent3.vue";
import ChildComponent4 from "@/views/ChildComponent4.vue";
import ParentComponent4 from "@/views/ParentComponent4.vue";
import ChildComponent5 from "@/views/ChildComponent5.vue";
import ParentComponent5 from "@/views/ParentComponent5.vue";
import SlotModalLayout from "@/views/SlotModalLayout.vue";
import SlotUseModalLayout from "@/views/SlotUseModalLayout.vue";
import ProvideInject from "@/views/ProvideInject.vue";
import ProvideInjectChild from "@/views/ProvideInjectChild.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
        // 사용자가 어떤 페이지에 접근하더라도 HomeView 컴포넌트를 import한다 (즉시로딩)
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
            // about에 접근하면 AboutView 컴포넌트를 import 한다 (지연로딩)
        }
    },
    {
        path: "/databinding",
        name: "DataBinding",
        component: DataBinding
    },
    {
        path: "/databindinghtml",
        name: "DataBindingHtml",
        component: DataBindingHtml
    },
    {
        path: "/databindinginputtext",
        name: "DataBindingInputText",
        component: DataBindingInputText
    },
    {
        path: "/databindinginputnumber",
        name: "DataBindingInputNumber",
        component: DataBindingInputNumber
    },
    {
        path: "/databindingtextarea",
        name: "DataBindingTextarea",
        component: DataBindingTextarea
    },
    {
        path: "/databindingselect",
        name: "DataBindingSelect",
        component: DataBindingSelect
    },
    {
        path: "/databindingcheckbox",
        name: "DataBindingCheckbox",
        component: DataBindingCheckbox
    },
    {
        path: "/databindingcheckbox2",
        name: "DataBindingCheckbox2",
        component: DataBindingCheckbox2
    },
    {
        path: "/databindingradio",
        name: "DataBindingRadio",
        component: DataBindingRadio
    },
    {
        path: "/databindingattribute",
        name: "DataBindingAttribute",
        component: DataBindingAttribute
    },
    {
        path: "/databindingbutton",
        name: "DataBindingButton",
        component: DataBindingButton
    },
    {
        path: "/databindingclass",
        name: "DataBindingClass",
        component: DataBindingClass
    },
    {
        path: "/databindingclass2",
        name: "DataBindingClass2",
        component: DataBindingClass2
    },
    {
        path: "/databindingstyle",
        name: "DataBindingStyle",
        component: DataBindingStyle
    },
    {
        path: "/databindingstyle2",
        name: "DataBindingStyle2",
        component: DataBindingStyle2
    },
    {
        path: "/databindinglist",
        name: "DataBindingList",
        component: DataBindingList
    },
    {
        path: "/renderingvif",
        name: "RenderingVIf",
        component: RenderingVIf
    },
    {
        path: "/eventclick",
        name: "EventClick",
        component: EventClick
    },
    {
        path: "/eventchange",
        name: "EventChange",
        component: EventChange
    },
    {
        path: "/computed",
        name: "Computed",
        component: Computed
    },
    {
        path: "/watch",
        name: "Watch",
        component: Watch
    },
    {
        path: "/nestedcomponent",
        name: "NestedComponent",
        component: NestedComponent
    },
    {
        path: "/nestedcomponent2",
        name: "NestedComponent2",
        component: NestedComponent2
    },
    {
        path: "/childcomponent",
        name: "ChildComponent",
        component: ChildComponent
    },
    {
        path: "/parentcomponent",
        name: "ParentComponent",
        component: ParentComponent
    },
    {
        path: "/childcomponent2",
        name: "ChildComponent2",
        component: ChildComponent2
    },
    {
        path: "/parentcomponent2",
        name: "ParentComponent2",
        component: ParentComponent2
    },
    {
        path: "/childcomponent3",
        name: "ChildComponent3",
        component: ChildComponent3
    },
    {
        path: "/parentcomponent3",
        name: "ParentComponent3",
        component: ParentComponent3
    },
    {
        path: "/childcomponent4",
        name: "ChildComponent4",
        component: ChildComponent4
    },
    {
        path: "/parentcomponent4",
        name: "ParentComponent4",
        component: ParentComponent4
    },
    {
        path: "/childcomponent5",
        name: "ChildComponent5",
        component: ChildComponent5
    },
    {
        path: "/parentcomponent5",
        name: "ParentComponent5",
        component: ParentComponent5
    },
    {
        path: "/slotmodallayout",
        name: "SlotModalLayout",
        component: SlotModalLayout
    },
    {
        path: "/slotusemodallayout",
        name: "SlotUseModalLayout",
        component: SlotUseModalLayout
    },
    {
        path: "/provideinject",
        name: "ProvideInject",
        component: ProvideInject
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
