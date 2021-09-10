const Article = require("../models/articleModel");
const Headlines = require("../models/headlinesModel");
const AppError = require("../util/AppError");
const catchAsync = require("../util/catchAsync");

const everything = require("../util/fetchArticles");

exports.getArticles = catchAsync(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 10;
  const page = Number(req.query.pageNumber) || 1;

  const articles = await Article.find()
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.status(200).json({
    status: "success",
    page,
    pageSize,
    articles,
  });
});

exports.getArticlesByCategory = catchAsync(async (req, res, next) => {
  const category = req.params.category;
  const pageSize = Number(req.query.pageSize) || 10;
  const page = Number(req.query.pageNumber) || 1;
  const categories = [
    "general",
    "business",
    "entertainmnent",
    "science",
    "sports",
    "technology",
  ];

  if (!categories.includes(category)) {
    return next(new AppError("Category is not defined", 400));
  }
  const count = await Article.countDocuments({ category });
  const articles = await Article.find({ category })
    .sort({ publishedAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.status(200).json({
    status: "success",
    count,
    page,
    pageSize,
    articlesCount: articles.length,
    articles,
  });
});

exports.getArticlesBySource = catchAsync(async (req, res, next) => {
  const source = req.params.source;
  const pageSize = Number(req.query.pageSize) || 10;
  const page = Number(req.query.pageNumber) || 1;

  if (!source) {
    return next(new AppError("Source is not defined, Must Define Source", 400));
  }

  const count = await Article.countDocuments({
    "source.id": {
      $regex: source,
    },
  });
  const articles = await Article.find({
    "source.id": {
      $regex: source,
    },
  })
    .sort({ publishedAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.status(200).json({
    status: "success",
    count,
    page,
    pageSize,
    articles,
  });
});

exports.getHeadlines = catchAsync(async (req, res, next) => {
  const pageSize = Number(req.query.pageSize) || 10;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Headlines.countDocuments();
  const articles = await Headlines.find()
    .sort({ publishedAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.status(200).json({
    status: "success",
    page,
    count,
    pageSize,
    articles,
  });
});

exports.getArticlesBySearch = catchAsync(async (req, res, next) => {
  const searchTerm = req.params.term.trim();
  const pageSize = Number(req.query.pageSize) || 10;
  const page = Number(req.query.pageNumber) || 1;

  if (!searchTerm) {
    return next(
      new AppError(
        "Search Term is not defined, Must Define a Term to search",
        400,
      ),
    );
  } else if (searchTerm.length < 3) {
    return next(
      new AppError("Search Term is Too Short, minimum three Characters ", 400),
    );
  }

  // const articlesByTitle = await Article.find({
  //   title: {
  //     $regex: searchTerm,
  //   },
  // });

  // const articlesByDescription = await Article.find({
  //   description: {
  //     $regex: searchTerm,
  //   },
  // });

  // const articlesBySource = await Article.find({
  //   "source.id": {
  //     $regex: searchTerm,
  //   },
  // });

  // const articlesByContent = await Article.find({
  //   content: {
  //     $regex: searchTerm,
  //   },
  // });

  // const ArticlesArray = [
  //   ...articlesByTitle,
  //   ...articlesByDescription,
  //   ...articlesBySource,
  //   ...articlesByContent,
  // ];

  // const articles = Array.from(
  //   new Set(ArticlesArray.map((article) => article._id)),
  // ).map((id) => ArticlesArray.find((article) => article._id === id));

  //cleaner way

  // const seenSet = new Set();
  // const articles = ArticlesArray.filter((article) => {
  //   const duplicate = seenSet.has(article._id);
  //   seenSet.add(article._id);
  //   return !duplicate;
  // });

  // const articlesLength = articles.length;
  // if (articlesLength < 5) {
  const fetchedArticles = await everything(null, searchTerm);
  const insertedArticles = await Article.insertMany(fetchedArticles);
  res.status(200).json({
    status: "success",
    count: fetchedArticles.length,
    articles: fetchedArticles,
    page,
    pageSize,
  });
  // }

  // res.status(200).json({
  //   status: "success",
  //   count: articlesLength,
  //   page,
  //   pageSize,
  //   articles,
  // });
});
