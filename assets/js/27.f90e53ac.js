(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{526:function(a,t,s){"use strict";s.r(t);var n=s(6),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[a._v("#")]),a._v(" 场景")]),a._v(" "),s("p",[a._v("在Bean初始化时，调用了"),s("code",[a._v("getBean(String)")]),a._v("方法，传入了一个"),s("code",[a._v("beanName")]),a._v("参数，在定义BeanDefnition时，有"),s("code",[a._v("id")]),a._v("、"),s("code",[a._v("name")]),a._v("、"),s("code",[a._v("alias")]),a._v("，这些都存在了哪里，是怎么分辨的呢？")]),a._v(" "),s("h2",{attrs:{id:"分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[a._v("#")]),a._v(" 分析")]),a._v(" "),s("h3",{attrs:{id:"解析bean节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析bean节点"}},[a._v("#")]),a._v(" 解析bean节点")]),a._v(" "),s("p",[a._v("先回头看看"),s("code",[a._v("<bean />")]),a._v("的解析，这段逻辑在"),s("code",[a._v("org.springframework.beans.factory.xml.BeanDefinitionParserDelegate#parseBeanDefinitionElement(org.w3c.dom.Element, org.springframework.beans.factory.config.BeanDefinition)")]),a._v("中：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ID_ATTRIBUTE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" nameAttr "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("NAME_ATTRIBUTE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" aliases "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hasLength")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("nameAttr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" nameArr "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tokenizeToStringArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("nameAttr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" MULTI_VALUE_ATTRIBUTE_DELIMITERS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    aliases"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Arrays")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("asList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("nameArr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" beanName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hasText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("beanName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("aliases"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("isEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    beanName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" aliases"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("isTraceEnabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("trace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"No XML 'id' specified - using '\"")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" beanName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\' as bean name and "')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" aliases "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" as aliases"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("逻辑比较简单，解析出"),s("code",[a._v("id")]),a._v("和"),s("code",[a._v("name")]),a._v("，而且"),s("code",[a._v("name")]),a._v("支持多个值，以"),s("code",[a._v(",;")]),a._v("(有个空格)分割。")]),a._v(" "),s("p",[a._v("如果"),s("code",[a._v("id")]),a._v("为空的话，就是用"),s("code",[a._v("name")]),a._v("的第一个元素来作为id，剩余的作为"),s("code",[a._v("alias")]),a._v("。")]),a._v(" "),s("p",[a._v("如果到这"),s("code",[a._v("id")]),a._v("还为空，比如"),s("code",[a._v('<bean class="..."/>')]),a._v("这种形式，那Spring就会调用"),s("code",[a._v("BeanDefinitionReaderUtils.generateBeanName")]),a._v("生成一个"),s("code",[a._v("beanName")]),a._v("。")]),a._v(" "),s("p",[a._v("到这里，"),s("code",[a._v("beanName")]),a._v("肯定是有值的，"),s("code",[a._v("alias")]),a._v("可能是空的，也有可能有值。")]),a._v(" "),s("p",[a._v("然后就是看注册"),s("code",[a._v("BeanDefinition")]),a._v("的时候，是怎么用到"),s("code",[a._v("beanName")]),a._v("和"),s("code",[a._v("alias")]),a._v("的：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("registerBeanDefinition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanDefinitionHolder")]),a._v(" definitionHolder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanDefinitionRegistry")]),a._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanDefinitionStoreException")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Register bean definition under primary name.")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" beanName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" definitionHolder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBeanName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("registerBeanDefinition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("beanName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" definitionHolder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBeanDefinition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Register aliases for bean name, if any.")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" aliases "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" definitionHolder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getAliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("aliases "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" alias "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" aliases"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("registerAlias")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("beanName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("主要就是"),s("code",[a._v("registerBeanDefinition")]),a._v("和"),s("code",[a._v("registerAlias")]),a._v("了。")]),a._v(" "),s("p",[a._v("看"),s("code",[a._v("DefaultListableBeanFactory#registerBeanDefinition")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("registerBeanDefinition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" beanName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanDefinition")]),a._v(" beanDefinition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//...")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("beanDefinitionMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("beanName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" beanDefinition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//...")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("code",[a._v("beanName")]),a._v("存在了"),s("code",[a._v("beanDefinitionMap")]),a._v("中。")]),a._v(" "),s("p",[a._v("再看"),s("code",[a._v("SimpleAliasRegistry#registerAlias")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("registerAlias")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("aliasMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("code",[a._v("alias")]),a._v("存在了"),s("code",[a._v("aliasMap")]),a._v("中。")]),a._v(" "),s("h3",{attrs:{id:"解析alias节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析alias节点"}},[a._v("#")]),a._v(" 解析alias节点")]),a._v(" "),s("p",[a._v("那这里也就不用再看了，同样是调用"),s("code",[a._v("SimpleAliasRegistry#registerAlias")]),a._v("，存在"),s("code",[a._v("aliasMap")]),a._v("中。")]),a._v(" "),s("h3",{attrs:{id:"getbean的参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getbean的参数"}},[a._v("#")]),a._v(" getBean的参数")]),a._v(" "),s("p",[a._v("传参的时候，没有说参数是"),s("code",[a._v("alias")]),a._v("还是"),s("code",[a._v("beanName")]),a._v("，看这里是如何转换的。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("doGetBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Nullable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" requiredType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Nullable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" typeCheckOnly"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" beanName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("transformedBeanName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("canonicalName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" canonicalName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Handle aliasing...")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" resolvedName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        resolvedName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("aliasMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("canonicalName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("resolvedName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            canonicalName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" resolvedName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("resolvedName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" canonicalName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("处理过程也很简单暴力，传过来的参数，就假设是"),s("code",[a._v("alias")]),a._v("，然后去获取对应的"),s("code",[a._v("beanName")]),a._v("，如果获取不到，就认为是"),s("code",[a._v("beanName")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[a._v("#")]),a._v(" 结论")]),a._v(" "),s("ol",[s("li",[s("code",[a._v("beanDefinitionMap")]),a._v(": "),s("code",[a._v("beanName -> BeanDefinition")])]),a._v(" "),s("li",[s("code",[a._v("aliasMap")]),a._v(": "),s("code",[a._v("alias -> beanName")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);