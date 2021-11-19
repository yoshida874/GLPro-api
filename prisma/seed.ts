import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  // AreaSeedCreate
  await prisma.area.upsert({
    where: { area_name: '渋谷区' },
    update: { area_name: '渋谷区' },
    create: {
      area_name: '渋谷区',
    },
  });
  await prisma.area.upsert({
    where: { area_name: '足立区' },
    update: { area_name: '足立区' },
    create: {
      area_name: '足立区',
    },
  });
  await prisma.area.upsert({
    where: { area_name: '新宿区' },
    update: { area_name: '新宿区' },
    create: {
      area_name: '新宿区',
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

  // UserSeedCreate
  await prisma.user.upsert({
    where: { email: 'sukechan@example.com' },
    update: {
      email: 'sukechan@example.com',
    },
    create: {
      email: 'sukechan@example.com',
      password: '0000',
      questions: {
        create: [
          {
            question_title: '質問1',
            question_content: '質問内容1',
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
        ],
      },
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
      questions: {
        create: [
          {
            question_title: '質問2',
            question_content: '質問内容2',
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
        ],
      },
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
      questions: {
        create: [
          {
            question_title: '質問3',
            question_content: '質問内容3',
            area: {
              connect: {
                area_name: '新宿区',
              },
            },
            category: {
              connect: {
                category_name: '物価',
              },
            },
          },
        ],
      },
    },
  });
}

// main()が成功したら呼び出される

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
          email: 'taiki@example.com',
        },
      },
      area: {
        connect: {
          area_name: '新宿区',
        },
      },
      category: {
        connect: {
          category_name: '物価',
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
          id: 1,
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
