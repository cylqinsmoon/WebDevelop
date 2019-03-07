<template>
  <div class="container">
    <h1>NPP计算</h1>
    <form>
    <input id="red" type="text" placeholder="输入红光波段数值" v-model="redValue" class="form-control"/>
    <input id="nir" type="text" placeholder="输入近红外波段数值" v-model="nirValue" class="form-control"/>
    <button type="button" class="btn btn-outline-success" v-on:click="getResult">计算结果</button>
    </form>
    <div class="table-responsive" v-show="showResult">
      <table class="table">
        <thead class="thead-dark">
        <tr>
          <th scope="col">指数名称</th>
          <th scope="col">数值</th>
        </tr>
        </thead>
        <tr v-for="item in results" >
          <td>
            {{item.name}}
          </td>
          <td>
            {{item.result}}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Index",
      data(){
          return{
            redValue:'',
            nirValue:'',
            showResult:false,
            results:[{"name":"NDVI","result":""},{"name":"MSAVI","result":""},{"name":"NPP","result":""}]
          }
      },
      methods:{
          getResult(){
            var red=parseFloat(this.redValue);
            var nir=parseFloat(this.nirValue);
            var cal1=nir-red;
            var cal2=nir+red;//一定要加上parseFloat，否则+会变成字符串连接
            var result1=cal1/cal2;//ndvi
            var result2=((2*nir+1-Math.sqrt(Math.pow((2*nir+1),2)-8*(nir-red))))/2;//msavi
            var result3=(-8*Math.pow(10,-6))*(Math.pow(937.36*Math.pow(result1,1.8918)),2)
              +0.0113*(937.36*Math.pow(result1,1.8918)+0.9407)*(-8069.8*Math.pow(result2,2)+10292*result2-1542.9);
            //this.results.push(result1,result2,result3);
            this.results[0].result=result1;
            this.results[1].result=result2;
            this.results[2].result=result3;
            this.showResult=true;
          }
      }
    }
</script>

<style scoped>
form{
  width: 200px;
  margin: auto;
}
</style>
