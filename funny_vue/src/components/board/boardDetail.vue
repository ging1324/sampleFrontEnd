<template>

    <div class="board-detail">
        <ul class="board-head">
            <li class="author">{{author}}</li>
            <li class="title">{{title}}</li>
            <li class="reg-date">{{reg_date}}</li>
        </ul>
        <ul class="board-body">
            <li >{{content}}</li>
        </ul>
        <!-- <div class="btn-area">
            <button class="list-btn" type="button" onClick={this.goList}>목록</button>
            <button class="update-btn" type="button" onClick={this.goUpdate}>수정하기</button>
            <button class="delete-btn" type="button" onClick={this.deleteData}>삭제</button>
        </div> -->
    </div>
</template>
<style src="../../assets/board/board.css"></style>
<script>
export default {
    beforeMount(){
    },
    mounted(){
        this.getDetail();
    },
    data(){
        return {
            author:'',
            title:'',
            content:'',
            reg_date:''
        }
    },
    methods:{
        getDetail(){
            console.info('aaa', this.$route.query.num);
            var num = this.$route.query.num;
            this.axios.get('http://ec2-54-180-31-0.ap-northeast-2.compute.amazonaws.com:3005/study/boardDetail?id='+num)
            .then((res) => {
                if(res.status === 200){
                    this.author = res.data.result.author;
                    this.title = res.data.result.title;
                    this.content = res.data.result.content;
                    this.reg_date = res.data.result.reg_date;
                   // console.info(' vue data : ', res.data.result.author)
                }
            })
        }
    },
    created() {
    }
}
</script>