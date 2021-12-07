import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  // RegionSeedCreate
  await prisma.region.upsert({
    where: { region_name: '都心・副都心エリア' },
    update: { region_name: '都心・副都心エリア' },
    create: {
      region_name: '都心・副都心エリア',
    },
  });
  await prisma.region.upsert({
    where: { region_name: '城東エリア' },
    update: { region_name: '城東エリア' },
    create: {
      region_name: '城東エリア',
    },
  });
  await prisma.region.upsert({
    where: { region_name: '城西エリア' },
    update: { region_name: '城西エリア' },
    create: {
      region_name: '城西エリア',
    },
  });
  await prisma.region.upsert({
    where: { region_name: '城南エリア' },
    update: { region_name: '城南エリア' },
    create: {
      region_name: '城南エリア',
    },
  });
  await prisma.region.upsert({
    where: { region_name: '城北エリア' },
    update: { region_name: '城北エリア' },
    create: {
      region_name: '城北エリア',
    },
  });
  await prisma.region.upsert({
    where: { region_name: '西多摩エリア' },
    update: { region_name: '西多摩エリア' },
    create: {
      region_name: '西多摩エリア',
    },
  });
  await prisma.region.upsert({
    where: { region_name: '南多摩エリア' },
    update: { region_name: '南多摩エリア' },
    create: {
      region_name: '南多摩エリア',
    },
  });
  await prisma.region.upsert({
    where: { region_name: '北多摩エリア' },
    update: { region_name: '北多摩エリア' },
    create: {
      region_name: '北多摩エリア',
    },
  });
  await prisma.region.upsert({
    where: { region_name: '島しょエリア' },
    update: { region_name: '島しょエリア' },
    create: {
      region_name: '島しょエリア',
    },
  });
  // AreaSeedCreate
  await prisma.area.upsert({
    where: { area_name: '渋谷区' },
    update: { area_name: '渋谷区' },
    create: {
      area_name: '渋谷区',
      region: {
        connect: {
          region_name: '都心・副都心エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '新宿区' },
    update: { area_name: '新宿区' },
    create: {
      area_name: '新宿区',
      region: {
        connect: {
          region_name: '都心・副都心エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '足立区' },
    update: { area_name: '足立区' },
    create: {
      area_name: '足立区',
      region: {
        connect: {
          region_name: '城東エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '荒川区' },
    update: { area_name: '荒川区' },
    create: {
      area_name: '荒川区',
      region: {
        connect: {
          region_name: '城東エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '練馬区' },
    update: { area_name: '練馬区' },
    create: {
      area_name: '練馬区  ',
      region: {
        connect: {
          region_name: '城西エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '世田谷区' },
    update: { area_name: '世田谷区' },
    create: {
      area_name: '世田谷区',
      region: {
        connect: {
          region_name: '城西エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '品川区' },
    update: { area_name: '品川区' },
    create: {
      area_name: '品川区',
      region: {
        connect: {
          region_name: '城南エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '目黒区' },
    update: { area_name: '目黒区' },
    create: {
      area_name: '目黒区',
      region: {
        connect: {
          region_name: '城南エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '北区' },
    update: { area_name: '北区' },
    create: {
      area_name: '北区',
      region: {
        connect: {
          region_name: '城北エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '板橋区' },
    update: { area_name: '板橋区' },
    create: {
      area_name: '板橋区',
      region: {
        connect: {
          region_name: '城北エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '奥多摩町' },
    update: { area_name: '奥多摩町' },
    create: {
      area_name: '奥多摩町',
      region: {
        connect: {
          region_name: '西多摩エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '青梅市' },
    update: { area_name: '青梅市' },
    create: {
      area_name: '青梅市',
      region: {
        connect: {
          region_name: '西多摩エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '八王子市' },
    update: { area_name: '八王子市' },
    create: {
      area_name: '八王子市',
      region: {
        connect: {
          region_name: '南多摩エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '稲城市' },
    update: { area_name: '稲城市' },
    create: {
      area_name: '稲城市',
      region: {
        connect: {
          region_name: '南多摩エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '三鷹市' },
    update: { area_name: '三鷹市' },
    create: {
      area_name: '三鷹市',
      region: {
        connect: {
          region_name: '北多摩エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '昭島市' },
    update: { area_name: '昭島市' },
    create: {
      area_name: '昭島市',
      region: {
        connect: {
          region_name: '北多摩エリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '大島町' },
    update: { area_name: '大島町' },
    create: {
      area_name: '大島町',
      region: {
        connect: {
          region_name: '島しょエリア',
        },
      },
    },
  });
  await prisma.area.upsert({
    where: { area_name: '小笠原村' },
    update: { area_name: '小笠原村' },
    create: {
      area_name: '小笠原村',
      region: {
        connect: {
          region_name: '島しょエリア',
        },
      },
    },
  });
  // CategorySeedCreate
  await prisma.category.upsert({
    where: { category_name: '治安' },
    update: { category_name: '治安' },
    create: {
      category_name: '治安',
    },
  });
  await prisma.category.upsert({
    where: { category_name: '交通' },
    update: { category_name: '交通' },
    create: {
      category_name: '交通',
    },
  });
  await prisma.category.upsert({
    where: { category_name: '物価' },
    update: { category_name: '物価' },
    create: {
      category_name: '物価',
    },
  });
  await prisma.category.upsert({
    where: { category_name: '子育て' },
    update: { category_name: '子育て' },
    create: {
      category_name: '子育て',
    },
  });
  await prisma.category.upsert({
    where: { category_name: '家賃' },
    update: { category_name: '家賃' },
    create: {
      category_name: '家賃',
    },
  });
  await prisma.category.upsert({
    where: { category_name: '品揃え' },
    update: { category_name: '品揃え' },
    create: {
      category_name: '品揃え',
    },
  });

  // UserSeedCreate
  await prisma.user.upsert({
    where: { email: 'sukechan@example.com' },
    update: {
      email: 'sukechan@example.com',
    },
    create: {
      email: 'sukechan@example.com',
      password: '0000',
    },
  });

  await prisma.user.upsert({
    where: { email: 'kyosuke@example.com' },
    update: {
      email: 'kyosuke@example.com',
    },
    create: {
      email: 'kyosuke@example.com',
      password: '1111',
    },
  });
  await prisma.user.upsert({
    where: { email: 'taiki@example.com' },
    update: {
      email: 'taiki@example.com',
    },
    create: {
      email: 'taiki@example.com',
      password: '0101',
    },
  });

  // QuestionSeedCreate
  await prisma.question.upsert({
    where: { id: 1 },
    update: {
      question_title: '質問1',
      question_content: '質問内容1',
    },
    create: {
      question_title: '質問1',
      question_content: '質問内容1',
      user: {
        connect: {
          email: 'sukechan@example.com',
        },
      },
      area: {
        connect: {
          area_name: '渋谷区',
        },
      },
      category: {
        connect: {
          category_name: '治安',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 2 },
    update: {
      question_title: '質問2',
      question_content: '質問内容2',
    },
    create: {
      question_title: '質問2',
      question_content: '質問内容2',
      user: {
        connect: {
          email: 'sukechan@example.com',
        },
      },
      area: {
        connect: {
          area_name: '荒川区',
        },
      },
      category: {
        connect: {
          category_name: '家賃',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 3 },
    update: {
      question_title: '質問3',
      question_content: '質問内容3',
    },
    create: {
      question_title: '質問3',
      question_content: '質問内容3',
      user: {
        connect: {
          email: 'sukechan@example.com',
        },
      },
      area: {
        connect: {
          area_name: '足立区',
        },
      },
      category: {
        connect: {
          category_name: '子育て',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 4 },
    update: {
      question_title: '質問4',
      question_content: '質問内容4',
    },
    create: {
      question_title: '質問4',
      question_content: '質問内容4',
      user: {
        connect: {
          email: 'sukechan@example.com',
        },
      },
      area: {
        connect: {
          area_name: '昭島市',
        },
      },
      category: {
        connect: {
          category_name: '物価',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 5 },
    update: {
      question_title: '質問5',
      question_content: '質問内容5',
    },
    create: {
      question_title: '質問5',
      question_content: '質問内容5',
      user: {
        connect: {
          email: 'sukechan@example.com',
        },
      },
      area: {
        connect: {
          area_name: '三鷹市',
        },
      },
      category: {
        connect: {
          category_name: '交通',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 6 },
    update: {
      question_title: '質問6',
      question_content: '質問内容6',
    },
    create: {
      question_title: '質問6',
      question_content: '質問内容6',
      user: {
        connect: {
          email: 'kyosuke@example.com',
        },
      },
      area: {
        connect: {
          area_name: '八王子市',
        },
      },
      category: {
        connect: {
          category_name: '子育て',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 7 },
    update: {
      question_title: '質問7',
      question_content: '質問内容7',
    },
    create: {
      question_title: '質問7',
      question_content: '質問内容7',
      user: {
        connect: {
          email: 'kyosuke@example.com',
        },
      },
      area: {
        connect: {
          area_name: '品川区',
        },
      },
      category: {
        connect: {
          category_name: '物価',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 8 },
    update: {
      question_title: '質問8',
      question_content: '質問内容8',
    },
    create: {
      question_title: '質問8',
      question_content: '質問内容8',
      user: {
        connect: {
          email: 'kyosuke@example.com',
        },
      },
      area: {
        connect: {
          area_name: '奥多摩町',
        },
      },
      category: {
        connect: {
          category_name: '治安',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 9 },
    update: {
      question_title: '質問9',
      question_content: '質問内容9',
    },
    create: {
      question_title: '質問9',
      question_content: '質問内容9',
      user: {
        connect: {
          email: 'kyosuke@example.com',
        },
      },
      area: {
        connect: {
          area_name: '大島町',
        },
      },
      category: {
        connect: {
          category_name: '品揃え',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 10 },
    update: {
      question_title: '質問10',
      question_content: '質問内容10',
    },
    create: {
      question_title: '質問10',
      question_content: '質問内容10',
      user: {
        connect: {
          email: 'kyosuke@example.com',
        },
      },
      area: {
        connect: {
          area_name: '足立区',
        },
      },
      category: {
        connect: {
          category_name: '子育て',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 11 },
    update: {
      question_title: '質問11',
      question_content: '質問内容11',
    },
    create: {
      question_title: '質問11',
      question_content: '質問内容11',
      user: {
        connect: {
          email: 'taiki@example.com',
        },
      },
      area: {
        connect: {
          area_name: '三鷹市',
        },
      },
      category: {
        connect: {
          category_name: '物価',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 12 },
    update: {
      question_title: '質問12',
      question_content: '質問内容12',
    },
    create: {
      question_title: '質問12',
      question_content: '質問内容12',
      user: {
        connect: {
          email: 'taiki@example.com',
        },
      },
      area: {
        connect: {
          area_name: '世田谷区',
        },
      },
      category: {
        connect: {
          category_name: '家賃',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 13 },
    update: {
      question_title: '質問13',
      question_content: '質問内容13',
    },
    create: {
      question_title: '質問13',
      question_content: '質問内容13',
      user: {
        connect: {
          email: 'taiki@example.com',
        },
      },
      area: {
        connect: {
          area_name: '目黒区',
        },
      },
      category: {
        connect: {
          category_name: '治安',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 14 },
    update: {
      question_title: '質問14',
      question_content: '質問内容14',
    },
    create: {
      question_title: '質問14',
      question_content: '質問内容14',
      user: {
        connect: {
          email: 'taiki@example.com',
        },
      },
      area: {
        connect: {
          area_name: '小笠原村',
        },
      },
      category: {
        connect: {
          category_name: '交通',
        },
      },
    },
  });
  await prisma.question.upsert({
    where: { id: 15 },
    update: {
      question_title: '質問15',
      question_content: '質問内容15',
    },
    create: {
      question_title: '質問15',
      question_content: '質問内容15',
      user: {
        connect: {
          email: 'taiki@example.com',
        },
      },
      area: {
        connect: {
          area_name: '板橋区',
        },
      },
      category: {
        connect: {
          category_name: '品揃え',
        },
      },
    },
  });
  // main()が成功したら呼び出される
}
async function sub() {
  // ReviewSeedCreate
  await prisma.review.upsert({
    where: { id: 1 },
    update: {
      review_content: 'とても良いです',
      evaluation: 5,
    },
    create: {
      review_content: 'とても良いです',
      evaluation: 5,
      user: {
        connect: {
          email: 'sukechan@example.com',
        },
      },
      area: {
        connect: {
          area_name: '渋谷区',
        },
      },
      category: {
        connect: {
          category_name: '治安',
        },
      },
    },
  });
  await prisma.review.upsert({
    where: { id: 2 },
    update: {
      review_content: '良いです',
      evaluation: 4,
    },
    create: {
      review_content: '良いです',
      evaluation: 4,
      user: {
        connect: {
          email: 'sukechan@example.com',
        },
      },
      area: {
        connect: {
          area_name: '足立区',
        },
      },
      category: {
        connect: {
          category_name: '交通',
        },
      },
    },
  });
  await prisma.review.upsert({
    where: { id: 3 },
    update: {
      review_content: '普通です',
      evaluation: 3,
    },
    create: {
      review_content: '普通です',
      evaluation: 3,
      user: {
        connect: {
          email: 'kyosuke@example.com',
        },
      },
      area: {
        connect: {
          area_name: '目黒区',
        },
      },
      category: {
        connect: {
          category_name: '物価',
        },
      },
    },
  });
  await prisma.review.upsert({
    where: { id: 4 },
    update: {
      review_content: '少し悪いです',
      evaluation: 2,
    },
    create: {
      review_content: '少し悪いです',
      evaluation: 2,
      user: {
        connect: {
          email: 'kyosuke@example.com',
        },
      },
      area: {
        connect: {
          area_name: '板橋区',
        },
      },
      category: {
        connect: {
          category_name: '子育て',
        },
      },
    },
  });
  await prisma.review.upsert({
    where: { id: 5 },
    update: {
      review_content: '悪いです',
      evaluation: 1,
    },
    create: {
      review_content: '悪いです',
      evaluation: 1,
      user: {
        connect: {
          email: 'taiki@example.com',
        },
      },
      area: {
        connect: {
          area_name: '八王子市',
        },
      },
      category: {
        connect: {
          category_name: '家賃',
        },
      },
    },
  });
  // AnswerSeedCreate
  await prisma.answer.upsert({
    where: { id: 1 },
    update: {
      answer_title: '回答1',
      answer_content: '回答内容1',
    },
    create: {
      answer_title: '回答1',
      answer_content: '回答内容1',
      user: {
        connect: {
          email: 'sukechan@example.com',
        },
      },
      question: {
        connect: {
          id: 6,
        },
      },
    },
  });
  await prisma.answer.upsert({
    where: { id: 2 },
    update: {
      answer_title: '回答2',
      answer_content: '回答内容2',
    },
    create: {
      answer_title: '回答2',
      answer_content: '回答内容2',
      user: {
        connect: {
          email: 'sukechan@example.com',
        },
      },
      question: {
        connect: {
          id: 7,
        },
      },
    },
  });
  await prisma.answer.upsert({
    where: { id: 3 },
    update: {
      answer_title: '回答3',
      answer_content: '回答内容3',
    },
    create: {
      answer_title: '回答3',
      answer_content: '回答内容3',
      user: {
        connect: {
          email: 'sukechan@example.com',
        },
      },
      question: {
        connect: {
          id: 8,
        },
      },
    },
  });
  await prisma.answer.upsert({
    where: { id: 4 },
    update: {
      answer_title: '回答4',
      answer_content: '回答内容4',
    },
    create: {
      answer_title: '回答4',
      answer_content: '回答内容4',
      user: {
        connect: {
          email: 'sukechan@example.com',
        },
      },
      question: {
        connect: {
          id: 9,
        },
      },
    },
  });
  await prisma.answer.upsert({
    where: { id: 5 },
    update: {
      answer_title: '回答5',
      answer_content: '回答内容5',
    },
    create: {
      answer_title: '回答5',
      answer_content: '回答内容5',
      user: {
        connect: {
          email: 'sukechan@example.com',
        },
      },
      question: {
        connect: {
          id: 10,
        },
      },
    },
  });
  await prisma.answer.upsert({
    where: { id: 6 },
    update: {
      answer_title: '回答6',
      answer_content: '回答内容6',
    },
    create: {
      answer_title: '回答6',
      answer_content: '回答内容6',
      user: {
        connect: {
          email: 'kyosuke@example.com',
        },
      },
      question: {
        connect: {
          id: 11,
        },
      },
    },
  });
  await prisma.answer.upsert({
    where: { id: 7 },
    update: {
      answer_title: '回答7',
      answer_content: '回答内容7',
    },
    create: {
      answer_title: '回答7',
      answer_content: '回答内容7',
      user: {
        connect: {
          email: 'kyosuke@example.com',
        },
      },
      question: {
        connect: {
          id: 12,
        },
      },
    },
  });
  await prisma.answer.upsert({
    where: { id: 8 },
    update: {
      answer_title: '回答8',
      answer_content: '回答内容8',
    },
    create: {
      answer_title: '回答8',
      answer_content: '回答内容8',
      user: {
        connect: {
          email: 'kyosuke@example.com',
        },
      },
      question: {
        connect: {
          id: 13,
        },
      },
    },
  });
  await prisma.answer.upsert({
    where: { id: 9 },
    update: {
      answer_title: '回答9',
      answer_content: '回答内容9',
    },
    create: {
      answer_title: '回答9',
      answer_content: '回答内容9',
      user: {
        connect: {
          email: 'kyosuke@example.com',
        },
      },
      question: {
        connect: {
          id: 1,
        },
      },
    },
  });
  await prisma.answer.upsert({
    where: { id: 10 },
    update: {
      answer_title: '回答10',
      answer_content: '回答内容10',
    },
    create: {
      answer_title: '回答10',
      answer_content: '回答内容10',
      user: {
        connect: {
          email: 'kyosuke@example.com',
        },
      },
      question: {
        connect: {
          id: 2,
        },
      },
    },
  });
  await prisma.answer.upsert({
    where: { id: 11 },
    update: {
      answer_title: '回答11',
      answer_content: '回答内容11',
    },
    create: {
      answer_title: '回答11',
      answer_content: '回答内容11',
      user: {
        connect: {
          email: 'taiki@example.com',
        },
      },
      question: {
        connect: {
          id: 3,
        },
      },
    },
  });
  await prisma.answer.upsert({
    where: { id: 12 },
    update: {
      answer_title: '回答12',
      answer_content: '回答内容12',
    },
    create: {
      answer_title: '回答12',
      answer_content: '回答内容12',
      user: {
        connect: {
          email: 'taiki@example.com',
        },
      },
      question: {
        connect: {
          id: 4,
        },
      },
    },
  });
}

main()
  .then(() => {
    sub().catch((e) => {
      console.error(e);
      process.exit(1);
    });
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
