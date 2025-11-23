const { generateText } = require("ai");
const { createGoogleGenerativeAI } = require("@ai-sdk/google");
const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const { v4: uuidv4 } = require("uuid");

const OUTPUT_DIR = path.resolve(process.cwd(), "source/_posts");
const GEMINI_API_KEY = "AIzaSyCQmFQnG3gjSPB6FN1kDSBZUb8cpYO3Pg0";
const google = createGoogleGenerativeAI({ apiKey: GEMINI_API_KEY });
const model = google("gemini-2.5-flash");

const keywords = [
  "情感",
  "生活",
  "治愈",
  "成长",
  "坚持",
  "希望",
  "友谊",
  "亲情",
  "自我发现",
  "旅行",
  "青春",
  "回忆",
  "梦想",
  "挑战",
  "失落",
  "温暖",
  "幸福",
  "孤独",
  "改变",
  "宽容",
  "爱情",
  "勇气",
  "自由",
  "家庭",
  "感恩",
  "忧伤",
  "释怀",
  "安慰",
  "信任",
  "悲伤",
  "安全感",
  "依赖",
  "失望",
  "愉悦",
  "忧愁",
  "欣慰",
  "羞愧",
  "惊喜",
  "惆怅",
  "向往",
  "怀念",
  "懊悔",
  "失落感",
  "烦恼",
  "无奈",
  "宽心",
  "舍不得",
  "唯美",
  "牵挂",
  "憧憬",
  "安心",
  "释然",
  "勇敢",
  "羞涩",
  "珍惜",
  "懊丧",
  "崇拜",
  "思念",
  "依恋",
  "懒散",
  "愤怒",
  "痛苦",
  "愧疚",
  "绝望",
  "平静",
  "包容",
  "羁绊",
  "欺骗",
  "温情",
  "怀旧",
  "慈爱",
  "难过",
  "挫折",
  "嫉妒",
  "心酸",
  "崇敬",
  "渴望",
  "满足",
  "怒气",
  "冷漠",
  "怅惘",
  "愚蠢",
  "痛快",
  "温柔",
  "怜悯",
  "不舍",
  "喜悦",
  "满心欢喜",
  "惊讶",
  "感动",
  "惊恐",
  "感激",
  "落寞",
  "脆弱",
  "认可",
  "笃定",
  "愤慨",
  "无助",
  "紧张",
  "兴奋",
  "焦虑",
  "心安",
  "失眠",
  "不安",
  "惊惧",
  "融洽",
  "甜蜜",
];

const main = async () => {
  const randomTopic = keywords[Math.floor(Math.random() * keywords.length)];

  const outputDoc = path.resolve(process.cwd(), OUTPUT_DIR, randomTopic);
  if (!fs.existsSync(outputDoc)) {
    fs.mkdirSync(outputDoc, {
      recursive: true,
    });
  }
  const date = dayjs().format("YYYY-MM-DD HH:mm:ss");
  const uuid = uuidv4();
  const outputPath = path.join(outputDoc, `${uuid}.md`);

  console.log(`开始生成文章: ${randomTopic}`);
  return new Promise(async (resolve, reject) => {
    try {
      const response = await generateText({
        model,
        system: `
      你是一位擅长用温柔、真挚文字打动人心的创作者，精通 Hexo 博客规范与 Markdown 写作。你能够细腻描写情感与真实细节，通过心理刻画和共情，让文章有温度、有力量。你写作时注重结构：分节、小标题清晰、每段都能抚慰并激励人心，整体格式符合 Markdown 标准，可用于 Hexo 博客发布。
        
      以下是【参考范文】，用于你理解格式和情感笔触。实际正文请根据上方新主题创作：
      
      title:【深夜思考】经历过太多感情的女人，身上会有这3个特征，别不相信
      date: ${date}
      tags:
        - xxx
        - xxx
        - xxx
      categories: 
        - xxx
        - xxx
        - xxx
      toc: true
      toc_number: true
      abbrlink: ${uuid}
      keywords:
        - xxx
        - xxx
        - xxx
      description: 这里需要有一段文章引言，引言需要有起承转合，照顾情感起伏，且贴合文章内容

      其余 hexo md格式......
      
      正文：
      夜深了，窗外的灯火依旧闪烁。
      
      今晚想和你聊聊一个扎心的话题——那些在感情里走过太多弯路的女人。
      
      你有没有想过，为什么有些人总是在感情里兜兜转转，却始终找不到归宿？
      
      其实啊，这个时代的爱情就像快餐，来得快去得也快。不是每个人都能在第一次恋爱就遇到对的人，更多的是在一次次的试错中成长。
      
      最近身边一个朋友跟我说："我发现那些谈过很多次恋爱的女生，身上都有一些共同点。"
      
      听完他的分析，我陷入了沉思。那些在感情里经历太多的女人，真的会变得不一样吗？
      
      今天就来聊聊，经历过太多感情的女人，通常会有的3个特征：
      
      她们变得异常理性，甚至有些冷漠 记得电影《前任3》里有句话："成年人的告别，是悄无声息的。"
      经历多了，就不会再为一点小事就哭天抢地。分手？OK。不爱了？那就散了吧。
      
      她们学会了及时止损，不会再像初恋时那样死缠烂打。
      
      这不是无情，而是一种自我保护。就像被烫伤过很多次的人，自然会对火保持距离。
      
      比起山盟海誓，更相信实际行动 "我爱你"三个字，对她们来说可能还不如一顿热腾腾的早餐来得实在。
      为什么？因为甜言蜜语听得太多了，耳朵都起茧了。
      
      真实案例：
      
      小A的前任每天说100遍爱她，结果劈腿了 小B的前任承诺给她全世界，最后连微信都删了 小C的前任发誓要娶她，转身就和别人领证了 所以她们开始相信：行动比语言更有说服力，陪伴比承诺更值得信赖。
      
      在亲密关系中表现得过于熟练 这点可能有些敏感，但确实存在。
      就像一个经常做菜的人，切菜的动作自然流畅。一个谈过很多次恋爱的人，在处理感情问题时也会显得游刃有余。
      
      知道什么时候该撒娇，什么时候该独立 懂得如何避免冲突，如何化解矛盾 明白男人想要什么，也清楚自己的底线在哪 但这种"熟练"有时候反而让人觉得少了些真诚。
      
      写在最后 看到这里，你可能会问：那这样的女人还值得爱吗？
      
      我想说的是，每个人都有自己的过去，重要的不是她经历过什么，而是她现在选择了你。
      
      那些在感情里受过伤的人，一旦认定了你，反而会更加珍惜。因为她们知道，遇到一个对的人有多不容易。
      
      就像那句话说的： "最好的爱情，是两个受过伤的人，小心翼翼地靠近彼此，然后用余生治愈对方。"
      
      所以啊，如果你遇到了这样的女人，请不要用她的过去评判她的现在。
      
      毕竟，谁的青春不曾犯过错呢？
      
      最后问你一个问题：你愿意接受一个有故事的人吗？还是更想要一张白纸？
      
      深夜了，晚安。
      
      愿你遇到那个值得托付的人，也愿你成为别人值得托付的人。

      `,
        prompt: `
      请以「${randomTopic}」为主题，创作一篇感人至深、充满温情和鼓励的原创文章，要求如下：
      - **正文和标题不要完全按照列子中的格式，需要自由发挥**
      - **不要讲故事**，只写真实生活感悟、情感体会和内心变化。
      - **全文800字以上**，推荐分为多个部分，每部分请加小标题。
      - **格式使用标准 Markdown，适用于 Hexo 博客**；
      - **内容需有起承转合，照顾情感起伏**；用细腻心理描写、真实场景、真诚治愈的语气感染读者。
      - **结尾请用一句温暖而治愈的话语作收，传达希望和正能量**。
      - **输出时只需提供 Markdown 正文，不要多余说明**。
      - **开头不要出现${"```markdown"},结尾也不要出现${"```"}**

      ** 使用这个时间！！！**
      ** date: ${date}**

      **只需要返回 hexo 能直接使用的 markdown 格式, 不要有其余多余的格式!**

      **请严格按照上述结构和Markdown规范写作。请勿添加多余说明。**
      `,
      });

      if (response.text.length > 100) {
        fs.writeFileSync(
          outputPath,
          response.text.replace(/```markdown/g, "").replace(/```/g, "")
        );
        resolve(randomTopic);
      } else {
        reject(new Error("文章生成失败"));
      }
    } catch (error) {
      reject(error);
    }
  });
};

main().then((topic) => {
  console.log(`文章生成完成~`);
});
