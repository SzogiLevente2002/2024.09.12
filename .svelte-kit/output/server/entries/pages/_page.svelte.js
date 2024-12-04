import { c as create_ssr_component } from "../../chunks/ssr.js";
import { e as escape } from "../../chunks/escape.js";
const css = {
  code: "body{user-select:none}h1.svelte-3rxqt6{text-align:center}table.svelte-3rxqt6{margin:0 auto}td.svelte-3rxqt6{width:100px;text-align:center}th.svelte-3rxqt6{font-size:30px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    var a = 0\\n    var b = 0\\n<\/script>\\n<h1>Eredményjelző</h1>\\n<table>\\n    <tr>\\n        <th>{a}</th>\\n        <th> - </th>\\n        <th>{b}</th>\\n    </tr>\\n    <tr>\\n        <td><button on:click={() => a++}>+</button></td>\\n        <td></td>\\n        <td><button on:click={() => b++}>+</button></td>\\n    </tr>\\n    <tr>\\n        <td>\\n            {#if a>0}\\n            <button on:click={() => a--}>-</button>\\n            {/if}\\n        </td>\\n        <td></td>\\n        <td>\\n            {#if b>0}\\n            <button on:click={() => b--}>-</button>\\n            {/if}\\n        </td>\\n    </tr>\\n</table>\\n<style>\\n    :global(body) {\\n        user-select: none;\\n    }\\n    h1 {\\n        text-align: center;\\n    }\\n    table {\\n        margin: 0 auto;\\n    }\\n    td {\\n        width: 100px;\\n        text-align: center;\\n    }\\n    th {\\n        font-size: 30px;\\n    }\\n</style>\\n"],"names":[],"mappings":"AA+BY,IAAM,CACV,WAAW,CAAE,IACjB,CACA,gBAAG,CACC,UAAU,CAAE,MAChB,CACA,mBAAM,CACF,MAAM,CAAE,CAAC,CAAC,IACd,CACA,gBAAG,CACC,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,MAChB,CACA,gBAAG,CACC,SAAS,CAAE,IACf"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var a = 0;
  var b = 0;
  $$result.css.add(css);
  return `<h1 class="svelte-3rxqt6" data-svelte-h="svelte-12anwkp">Eredményjelző</h1> <table class="svelte-3rxqt6"><tr><th class="svelte-3rxqt6">${escape(a)}</th> <th class="svelte-3rxqt6" data-svelte-h="svelte-kvhund">-</th> <th class="svelte-3rxqt6">${escape(b)}</th></tr> <tr><td class="svelte-3rxqt6"><button data-svelte-h="svelte-10ifeju">+</button></td> <td class="svelte-3rxqt6"></td> <td class="svelte-3rxqt6"><button data-svelte-h="svelte-qrvc89">+</button></td></tr> <tr><td class="svelte-3rxqt6">${``}</td> <td class="svelte-3rxqt6"></td> <td class="svelte-3rxqt6">${``}</td></tr> </table>`;
});
export {
  Page as default
};
