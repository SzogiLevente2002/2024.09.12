import { c as create_ssr_component, e as each } from "../../../chunks/ssr.js";
import { e as escape } from "../../../chunks/escape.js";
const css = {
  code: ".g.svelte-nmr859.svelte-nmr859{display:grid;grid-template-columns:repeat(10, 1fr)}.g.svelte-nmr859 button.svelte-nmr859{padding:5px;margin:5px;height:50px;border:1px solid black;text-align:center;cursor:pointer;border-radius:10px;box-shadow:1px 1px 3px black}.g.svelte-nmr859 button.l0.svelte-nmr859{background-color:antiquewhite}.g.svelte-nmr859 button.l1.svelte-nmr859{background-color:rgb(19, 62, 49)}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    const l = Array(100).fill(0)\\n<\/script>\\n<div class=g>\\n{#each l as _}\\n    <button class=l{_} \\n            on:click={() => \\n                _ = _ == 1 ? 0 : 1\\n            }\\n    ></button>\\n{/each}\\n</div>\\n<style>\\n.g {\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n}\\n.g button {\\n    padding:5px;\\n    margin: 5px;\\n    height: 50px;\\n    border: 1px solid black;\\n    text-align: center;\\n    cursor: pointer;\\n    border-radius: 10px;\\n    box-shadow: 1px 1px 3px black;\\n}\\n.g button.l0 {\\n    background-color: antiquewhite;\\n}\\n.g button.l1 {\\n    background-color: rgb(19, 62, 49);\\n}\\n</style>"],"names":[],"mappings":"AAaA,8BAAG,CACC,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,EAAE,CAAC,CAAC,GAAG,CACzC,CACA,gBAAE,CAAC,oBAAO,CACN,QAAQ,GAAG,CACX,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAC5B,CACA,gBAAE,CAAC,MAAM,iBAAI,CACT,gBAAgB,CAAE,YACtB,CACA,gBAAE,CAAC,MAAM,iBAAI,CACT,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CACpC"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const l = Array(100).fill(0);
  $$result.css.add(css);
  return `<div class="g svelte-nmr859">${each(l, (_) => {
    return `<button class="${"l" + escape(_, true) + " svelte-nmr859"}"></button>`;
  })} </div>`;
});
export {
  Page as default
};
