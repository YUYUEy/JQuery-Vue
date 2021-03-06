export default {
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    screenfull: '全屏',
    theme: '换肤',
    size: '布局大小',
    loginTime: '登录时间',
    homeConfig: '首页个性化',
    profile: {
      title: '个人中心',
      timezone: '时区',
      language: '语言',
      primaryPosition: '关键岗位'
    }
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  mideaMessage: {
    defaultErrorInfo: '请求异常，请与管理员联系!',
    cancelButtonText: '取消',
    confirmButtonText: '确定',
    showMoreText: '更多'
  },
  common: {
    noData: '暂无数据',
    tips: '提示',
    confirm: '确定',
    cancel: '取消',
    success: '成功!',
    add: '新增',
    edit: '修改',
    editMutiLang: "编辑多语言",
    delete: '删除',
    migration: '迁移',
    migration_tip: '数据库将被覆盖。你确定操作吗？',
    reset: '重置',
    layout: '布局',
    pleaseSelect: '请选择',
    pleaseSelectOne: '请选择一条数据',
    cannotEdit: '请选择需要修改的条目',
    cannotCopy: '请选择需要复制的条目',
    cannotSame: '此名称已被使用',
    cannotDelete: '请选择需要删除的条目',
    errorInput: '请输入正确的',
    errorInputLength: '超出可输入长度',
    errorSelect: '请选择正确的',
    errorNumber: '请输入数字',
    apply: '应用',
    save: '保存',
    save_apply: '应用并保存',
    layout_title: '布局',
    tooLong: '最大长度:',
    confirm_enable: '设置为可用？',
    confirm_disable: '禁用？',
    error: '出错了!',
    pleaseTypeContents: '请输入内容',
    editted: '保存编辑内容?',
    checkEdit: '请检查录入的内容',
    delRow: '删除该行?',
    export: '导出',
    fileName: '文件名',
    editBeforeSave: '请编辑未保存的行',
    all: '全部',
    setMin: '设置了最少选择个数，不能取消全选',
    search: '查询',
    enable: '启用',
    disable: '禁用',
    show: '显示',
    hide: '隐藏',
    onceSave: '暂存',
    deleteViews: '从界面删除选中内容，如果需要删除数据请点击保存',
    cannotSave: '没有需要保存的内容',
    dataExisted: '数据已存在',
    operation: '操作',
    information: '信息',
    placeholder: '输入关键字进行过滤',
    active: '生效',
    inactive: '失效',
    cannotActive: '请选择需要生效的条目',
    cannotInactive: '请选择需要失效的条目',
    refreshCache: '刷新缓存',
    cannotrefreshCache: '请选择需要刷新的条目',
    download: '下载',
    preview: '预览',
    import: '导入',
    selectExportCol: "请选择导出的列",
    confirmDelete: '请确认是否需要永久删除此数据？',
    cancelDelete: '已取消删除。',
    yes: '是',
    no: '否',
    loading: '拼命加载中',
    synchronize: '迁移',
    refresh: '刷新',
    copy: '复制',
    selectAll: '全选',
    more:'更多'
  },
  // 组件
  components: {
    headers: {
      sort: '排序',
      columnName: '列名',
      hidden: '隐藏',
      width: '列宽',
      freeze: '冻结',
      operation: '操作'
    },
    showFilter: '启用过滤条',
    left: '左',
    right: '右',
    none: '不冻结',
    pager: {
      showing: '当前显示',
      to: '至',
      of: '共',
      entries: '条'
    },
    condition: {
      bt: '之间',
      cn: '包含',
      eq: '等于',
      ne: '不等',
      me: '多选',
      bw: '开始于',
      ew: '结束于',
      gt: '大于',
      ge: '大于等于',
      lt: '小于',
      le: '小于等于'
    },
    fileupload: {
      dragfile: '将文件拖到此处，或',
      clickupload: '点击上传',
      fileslimit: '文件超出个数限制', //Files exceed the number limit
      uploadFailed: '上传失败!',
      filelist: '上传列表',
      name: '文件名',
      type: '文件类型',
      size: '文件大小',
      uploadUserName: '上传人',
      uploadDate: '上传时间',
      previewLoading: '预览生成中...',
      uploadLoading: '上传中...',
      maxSizeUploadError: '上传文件大小不能超过',
      minSizeUploadError: '上传文件大小必须大于0'
    },
    address: {
      detailAddress: '详细地址',
      selectToReturn: '请选择一行',
      countryName: '国家/地区',
      stateName: '省',
      cityName: '市',
      districtName: '县',
      zipcode: '邮编',
      address1: '地址1',
      address2: '地址2',
      address3: '地址3',
      addressSelect: '地址选择',
      selectCountry: '请选择国家/地区'
    },
    notice: {
      title: '通知公告',
      more: '更多公告',
      author: '作者',
      publishTime: '发布时间',
      attachments: '附件列表',
      headers: {
        title: '标题'
      }
    },
    viewSwitcher: {
      setting: '设置',
      add: '添加',
      base: '基础视图',
      my: '我的视图',
      share: '共享视图'
    },
    viewConfig: {
      viewName: '视图名称',
      defaultFlag: '默认视图',
      pageSize: '默认分页大小',
      appShare: '共享',
      showFilter: '启用过滤条',
      sortField: '默认排序字段',
      sortDirection: '升降序',
      layout: '布局设置',
      column: '候选字段',
      showColumn: '显示字段',
      columnName: '列名',
      sortable: '排序',
      seq: '顺序',
      filterable: '过滤',
      fixed: '冻结',
      columnWidth: '宽度',
      dataSetting: '过滤配置',
      condition: '比较符',
      value: '值',
      operation: '操作',
      noSort: '不排序',
      viewNameRequired: '视图名称必填！',
      uniqueName: '视图名称重复'
    },
    // 组织选择公共弹窗
    orgSelection: {
      title: '选择组织',
      organization: '组织',
      selected: '已选择',
      headers: {
        orgName: '组织名称',
        orgCode: '组织编码'
      }
    },
    // 人员选择公共弹窗
    userSelection: {
      title: '选择人员',
      organization: '组织',
      search: '搜索',
      add: '添加',
      allAdd: '全部添加',
      delete: '删除',
      allDelete: '全部删除',
      selected: '已选',
      person: '人',
      selectData: '请选择数据',
      dataExists: '数据已存在',
      inputSearchContent: '请输入搜索内容',
      userName: 'MIP',
      fullName: '用户名称',
      orgName: '组织名称',
      positionName: '岗位名称'
    },
    // 岗位选择公共弹窗
    orgPositionSel: {
      title: '选择岗位',
      organization: '组织',
      position: '岗位',
      selected: '已选择',
      add: '添加',
      allAdd: '全部添加',
      delete: '删除',
      allDelete: '全部删除',
      headers: {
        positionName: '岗位名称',
        primaryUserName: '关键用户',
        primaryEnuCode: '英文名'
      },
      inputSearchContent: '请输入搜索内容'
    },
    //审批头组件
    approvalHead: {
      headers: {
        pass: '通过',
        refuse: '驳回',
        abandon: '废弃',
        commission: '转办',
        communicate: '沟通',
        circulate: '传阅',
        remind: '催办',
        returnCommunicate: '回复沟通',
        cancelCommunicate: '取消沟通',
        return: '撤回',
        applicant: '申请人',
        phoneNumber: '电话号码',
        email: '电子邮箱',
        division: '部门',
        organization: '组织架构',
        contacts: '美的通讯录',
        selected: '已选',
        person: '人',
        comments: '审批意见',
        refuseTo: '驳回到',
        selectNode: '请选择',
        nodeContent: '重新提交后直接返回本节点',
        draftAbandon: '起草人-废弃',
        draftReturn: '起草人-撤回',
        approvalProcess: '审批流程',
        reason: '申请原因',

      },
      tips: {
        passContent: '通过',
        tip: '提示',
        abandonContent: '确认废弃该流程?',
        returnContent: '确认撤回该流程?',
        inputComments: '请输入审批意见',
        selectCirculatePerson: '请选择传阅人',
        selectApprovalPerson: '请选择审批人',
        approvalCompletion: '操作成功',
        selectData: '请选择数据',
        dataExists: '数据已存在',
        inputSearchContent: '请输入搜索内容'

      },
      button: {
        search: '搜索',
        add: '添加',
        allAdd: '全部添加',
        delete: '删除',
        allDelete: '全部删除',
        cancel: '取消',
        confirm: '确认',
        process: '流程'
      }
    },
    stratProcess: {
      title: '我申请的流程',
      headers: {
        docSubject: '工作流程名称',
        docStatusValue: '状态',
        docCreatorLoginName: '申请人',
        docPublishTime: '发布时间',
        docCreateTime: '申请时间',
        inputKeywordSearch: '请输入关键字搜索',
        pleaseSelect: '请选择',
        stratTime: '开始时间',
        endTime: '结束时间'
      },
      tips: {
        paramError: '参数错误',
        webJump: '网页跳转中...',
      }
    },
    workedProcess: {
      title: '已审批流程',
      headers: {
        fdSubject: '工作流程名称',
        fdHandlerName: '操作人',
        docCreatorName: '申请人',
        fdStatus: '状态',
        fdEndDate: '更新时间',
        attachment: '附件',
        attachmentReview: '附件预览',
        inputKeywordSearch: '请输入关键字搜索',
        stratTime: '开始时间'
      },
      tips: {
        paramError: '参数错误',
        webJump: '网页跳转中...'
      }
    },
    runningProcess: {
      title: '待我审批流程',
      headers: {
        fdSubject: '工作流程名称',
        fdHandlerName: '操作人',
        docCreatorName: '申请人',
        fdStatus: '状态',
        fdNodeStarDate: '更新时间',
        attachment: '附件',
        attachmentReview: '附件预览',
        inputKeywordSearch: '请输入关键字搜索',
        stratTime: '开始时间'
      },
      options: {
        created: '创建中',
        approving: '审批中',
        approved: '审批通过',
        rejected: '驳回',
        cancelled: '作废',
        withdraw: '撤回',
        deleted: '删除',
        error: '出错'
      },
      tips: {
        paramError: '参数错误',
        webJump: '网页跳转中...',
      }
    },
    processTable: {
      headers: {
        flowStatus: '审批流程状态',
        fdNodeName: '节点',
        fdHandlerName: '操作人',
        fdOperationName: '操作',
        fdAuditeInfo: '审批意见',
        fdHandlerTime: '审批时间',
        inputKeywordSearch: '请输入关键字搜索',
        stratTime: '开始时间'
      }
    },
    flownode: {
      nodeId: "节点序号",
      nodeName: "节点名称",
      processValue: "审批类型",
      handlerNames: "审批人",
      selectUser: "选择",
    },
    eio: {
      config:"获取Excel模块配置失败",
      importTitle: "Excel导入",
      codeRequire: "缺少入参：templatecode",
      serviceRequire: "缺少入参：servicename",
      template: "模板下载",
      file: "文件导入",
      selectFile: "选取文件",
      importFile: "导入文件",
      importTip: "只能上传xls/xlsx文件",
      importResult: "导入结果",
      importing: '导入中...',
      uploadFailed: '上传失败!',
      importSuccess: '导入成功',
      importFailed: '导入失败',
      importError: '导入存在错误',
      resultInfo: '成功：%s条，失败：%s条，耗时：%s秒',
      errorExcel: '点此下载excel错误信息',
      errorDownload: '错误下载',
      templateExport: '按模板导出',
      downloadTemplate: '按模板导入',
      customExport: '自定义导出',
      exportFileName: '数据导出',
      exportTitle: 'Excel导出配置',
      filenameRequire: '文件名必填',
      fileRequire: '选择上传的文件',
      asycImportTitle:'Excel异步导入',
      exportList: '导出列表',
      headers:{
        startTime:'开始时间',
        endTime:'结束时间',
        duration:'耗时(秒)',
        success:'成功数量',
        fail:'失败数量',
        status:'状态',
        remark:'备注',
        attachmentId:'下载'
      }
    },
    auth: {
      headers: {
        application: '应用',
        serviceName: '服务',
        path: '路径'
      }
    },
    homepage: {
      step1: '参数配置',
      step2: '布局配置',
      step3: '挂件配置',
      next: '下一步',
      previous: '上一步',
      notice: 'PS：如无特殊要求，可保持默认值进入下一步',
      colNum: '网格列数',
      rowHeight: '行的高度(px)',
      marginX: '水平间隔(px)',
      marginY: '垂直间隔(px)',
      draggable: '是否可拖拽',
      resizable: '是否可缩放',
      maxRows: '最大行数',
      background: '背景色',
      addBlock: '添加区域',
      layoutInfo: '可拖拽！可缩放！',
      selectWidget: '选择挂件',
      publicWidget: '公共挂件',
      privateWidget: '产品挂件',
      select: '选择',
      saveError: '存在未配置挂件的区域!',
      referenceResolution: '参考分辨率',
      saverefresh: '保存并刷新',
      default: '使用默认首页请点击',
      restoreDefault: '恢复默认',
      AdvancedConfig: '高级配置',
      normalConfig:'普通配置',
      normalInfo:'PS:红框窗口可拖拽可缩放可选配挂件',
    }
  },
  loginError:{
    "ISC-950":"用户不存在或密码错误！",
    "ISC-920":"无用户登录信息禁止访问服务！",
    "ISC-912":"获取Profile失败！",
    "ISC-903":"用户名或密码为空！",
    "ISC-904":"SSO登录失败！",
    "ISC-914":"系统名或令牌为空！",
    "ISC-911":"SSO获取用户名失败！",
    "ISC-913":"SSO获取Token失败！",
    "ISC-980":"SSO访问权限未配置!",
    "ISC-981":"IP在黑名单中，禁止访问！",
    "ISC-982":"SSO服务不在IP白名单中，禁止访问！",
  }
}
