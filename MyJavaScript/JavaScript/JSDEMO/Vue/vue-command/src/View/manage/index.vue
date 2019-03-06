<template>
  <div class="manage tc">
    <button v-on:click="add" class="btn btn-primary">新增</button>
    <div class="ui action input" v-show="showAdd">
      <input type="text" placeholder="请输入人员姓名" v-model="nameValue"/>
      <button class="ui button"  @click="addName">确定</button>
    </div>
    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th scope="col">姓名</th>
        <th scope="col">操作</th>
      </tr>
      </thead>
      <tr v-for="(item,index) in peoples">
        <td>
          {{item.name}}
        </td>
        <!--通过列表ID来判断删除哪个-->
        <td v-bind:id="index">
          <button @click="edit" class="btn btn-outline-info">编辑</button>&nbsp;
          <button v-on:click="del" class="btn btn-outline-info">删除</button>
        </td>
      </tr>
    </table>
    <!--编辑区域-->
    <div class="ui action input" v-show="showEdit">
        <input type="text" placeholder="请输入新姓名" v-model="newName"/>
      <button  @click="cancle" class="ui button">取消</button>&nbsp;
      <button  @click="editName" class="ui button">确定</button>
    </div>
    <foot-nav v-bind:class="{'isIndex':isNowPage}"/>
  </div>
</template>

<script>
  import FootNav from '../../components/footer'

  export default {
    name: "index",
    components: {
      FootNav
    },
    data() {
      return {
        isNowPage: true,
        //控制输入框显示与隐藏
        showAdd: false,
        //编辑功能
        showEdit:false,
        //将人员信息存在数组以动态显示
        peoples: [{'name': 'Jack'}, {'name': 'Joe'}],
        nameValue: '',
        newName:'',
        editId:0
      }
    },
    methods: {
      add() {
        this.showAdd = true
      },
      //将输入框内容压入数组
      addName() {
        var v = this.nameValue
        if (v.trim() == "") {
          alert("请输入新增人员姓名")
        }
        else {
          var data = {}
          data.name = v
          this.peoples.push(data)
        }
      },
      //删除该节点父节点
      del(e) {
        var id = e.target.offsetParent
        this.peoples.splice(id, 1)
      },
      //获取ID及名字，并显示编辑区域
      edit(e){
        var id=e.target.offsetParent.id
        this.showEdit=true
        this.editId=id
        this.newName=this.peoples[id].name;
      },
      cancle(){
        this.showEdit=false
      },
      editName(){
        //将获取的姓名压入数组
        var v=this.newName
        if(v.trim()==""){
          alert("请输入姓名")
        }
        else {
          this.peoples[this.editId].name=this.newName
          this.showEdit=false
        }
      }
    }
  }
</script>

<style scoped>

</style>
