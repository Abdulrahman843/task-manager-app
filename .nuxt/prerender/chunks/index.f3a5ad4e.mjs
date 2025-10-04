import { useSSRContext, ref, mergeProps } from 'file://C:/Users/Abdulrahman/Desktop/Vue_Nuxt/task-manager-app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderComponent } from 'file://C:/Users/Abdulrahman/Desktop/Vue_Nuxt/task-manager-app/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main$3 = {
  __name: "TaskForm",
  __ssrInlineRender: true,
  emits: ["add-task"],
  setup(__props, { emit: __emit }) {
    const taskTitle = ref("");
    const taskDescription = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "task-form" }, _attrs))} data-v-ceb2b2a4><h3 data-v-ceb2b2a4>Add New Task</h3><form data-v-ceb2b2a4><input${ssrRenderAttr("value", taskTitle.value)} type="text" placeholder="Enter task title" required data-v-ceb2b2a4><textarea placeholder="Enter task description" data-v-ceb2b2a4>${ssrInterpolate(taskDescription.value)}</textarea><button type="submit" data-v-ceb2b2a4>Add Task</button></form></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TaskForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TaskForm = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ceb2b2a4"]]);
const _sfc_main$2 = {
  __name: "TaskItem",
  __ssrInlineRender: true,
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  emits: ["toggle-complete", "delete-task"],
  setup(__props, { emit: __emit }) {
    function formatDate(date) {
      if (!date)
        return "";
      const d = new Date(date);
      return d.toLocaleDateString();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["task-item", { "completed": __props.task.completed }]
      }, _attrs))} data-v-b0e915d9><div class="task-content" data-v-b0e915d9><input type="checkbox"${ssrIncludeBooleanAttr(__props.task.completed) ? " checked" : ""} data-v-b0e915d9><div data-v-b0e915d9><h3 data-v-b0e915d9>${ssrInterpolate(__props.task.title)}</h3><p data-v-b0e915d9>${ssrInterpolate(__props.task.description)}</p><small data-v-b0e915d9>Created: ${ssrInterpolate(formatDate(__props.task.createdAt))}</small></div></div><button class="delete-btn" data-v-b0e915d9>Delete</button></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TaskItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TaskItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b0e915d9"]]);
const _sfc_main$1 = {
  __name: "TaskList",
  __ssrInlineRender: true,
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  emits: ["toggle-complete", "delete-task"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "task-list" }, _attrs))} data-v-6f7cde77><h2 data-v-6f7cde77>My Tasks</h2>`);
      if (__props.tasks.length === 0) {
        _push(`<div class="empty-state" data-v-6f7cde77> No tasks yet. Add a new task to get started! </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.tasks, (task) => {
        _push(ssrRenderComponent(TaskItem, {
          key: task.id,
          task,
          onToggleComplete: ($event) => _ctx.$emit("toggle-complete", $event),
          onDeleteTask: ($event) => _ctx.$emit("delete-task", $event)
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TaskList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TaskList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6f7cde77"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tasks = ref([]);
    function addTask(task) {
      tasks.value.push(task);
      saveToLocalStorage();
    }
    function toggleTaskComplete(taskId) {
      const task = tasks.value.find((t) => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
        saveToLocalStorage();
      }
    }
    function deleteTask(taskId) {
      tasks.value = tasks.value.filter((t) => t.id !== taskId);
      saveToLocalStorage();
    }
    function saveToLocalStorage() {
      localStorage.setItem("tasks", JSON.stringify(tasks.value));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-c4b9004d><h1 data-v-c4b9004d>Task Manager</h1>`);
      _push(ssrRenderComponent(TaskForm, { onAddTask: addTask }, null, _parent));
      _push(ssrRenderComponent(TaskList, {
        tasks: tasks.value,
        onToggleComplete: toggleTaskComplete,
        onDeleteTask: deleteTask
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4b9004d"]]);

export { index as default };
//# sourceMappingURL=index.f3a5ad4e.mjs.map
