/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 14:44:21
 * @LastEditTime: 2019-08-22 21:03:22
 * @LastEditors: Please set LastEditors
 */
/**
 * Created by Administrator on 2017/8/18 0018.
 */
var express=require('express');
var router = express.Router();  
var login=require('./admin/login.js');
var citys=require('./admin/citys.js');
var items=require('./admin/items.js');
var booklist=require('./admin/booklist.js');
var bookdetail=require('./admin/bookdetail.js');

router.use(function(req,res,next){
    // console.log('tag---', req.query)
    next()
})

router.use('/login',login);
router.use('/citys',citys);
router.use('/items',items);
router.use('/booklist',booklist);
router.use('/bookdetail',bookdetail);

module.exports = router;   