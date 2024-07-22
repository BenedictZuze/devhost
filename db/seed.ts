import { Author, db, Post } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Author).values([
    { id: 1, firstName: "Benedict", lastName: "Zuze" },
    { id: 2, firstName: "Steve", lastName: "Tsekani" },
  ]);

  await db.insert(Post).values([
    {
      title: "This Week in Dev-Hosted",
      description:
        "Self-hosted news, updates, launches, and a spotlight on DB Tech - a self-hosted YouTube content creator",
      content:
        "Another week, another semi-controversial Immich release. If you aren't familiar with the project, it's a Google Photos alternative often criticized for its frequent breaking changes and versioning system (to be fair, the team is upfront about this in their release notes and I personally don't mind working around it for such a solid self-hosted alternative).\nThis week, however, the team finally delivered something they've been hinting at since being acquired by FUTO earlier this year - paid licenses. Users can pay either $25 (personal) or $100 (server) for a license that nets them a 'Licensed' badge in the software's web interface. The team continues to confirm they have no plans for paywalled features, but the decision to tag installations as either licensed or unlicensed is still unusual for a free/open-source project and has created some confusion across the community.\nUnrelatedly, if you're looking for something to spin up this weekend – there was a recent thread on Reddit prompting users for their favorite \"underdog\" self-hosted services that is absolutely worth checking out.\nHappy selfh.st/ing!",
      authorId: 1,
    },
    {
      title: "This Week in Dev-Hosted",
      description:
        "Self-hosted news, updates, launches, and a spotlight on DB Tech - a self-hosted YouTube content creator",
      content:
        "Another week, another semi-controversial Immich release. If you aren't familiar with the project, it's a Google Photos alternative often criticized for its frequent breaking changes and versioning system (to be fair, the team is upfront about this in their release notes and I personally don't mind working around it for such a solid self-hosted alternative).\nThis week, however, the team finally delivered something they've been hinting at since being acquired by FUTO earlier this year - paid licenses. Users can pay either $25 (personal) or $100 (server) for a license that nets them a 'Licensed' badge in the software's web interface. The team continues to confirm they have no plans for paywalled features, but the decision to tag installations as either licensed or unlicensed is still unusual for a free/open-source project and has created some confusion across the community.\nUnrelatedly, if you're looking for something to spin up this weekend – there was a recent thread on Reddit prompting users for their favorite \"underdog\" self-hosted services that is absolutely worth checking out.\nHappy selfh.st/ing!",
      authorId: 1,
    },
    {
      title: "This Week in Dev-Hosted",
      description:
        "Self-hosted news, updates, launches, and a spotlight on DB Tech - a self-hosted YouTube content creator",
      content:
        "Another week, another semi-controversial Immich release. If you aren't familiar with the project, it's a Google Photos alternative often criticized for its frequent breaking changes and versioning system (to be fair, the team is upfront about this in their release notes and I personally don't mind working around it for such a solid self-hosted alternative).\nThis week, however, the team finally delivered something they've been hinting at since being acquired by FUTO earlier this year - paid licenses. Users can pay either $25 (personal) or $100 (server) for a license that nets them a 'Licensed' badge in the software's web interface. The team continues to confirm they have no plans for paywalled features, but the decision to tag installations as either licensed or unlicensed is still unusual for a free/open-source project and has created some confusion across the community.\nUnrelatedly, if you're looking for something to spin up this weekend – there was a recent thread on Reddit prompting users for their favorite \"underdog\" self-hosted services that is absolutely worth checking out.\nHappy selfh.st/ing!",
      authorId: 2,
    },
    {
      title: "This Week in Dev-Hosted",
      description:
        "Self-hosted news, updates, launches, and a spotlight on DB Tech - a self-hosted YouTube content creator",
      content:
        "Another week, another semi-controversial Immich release. If you aren't familiar with the project, it's a Google Photos alternative often criticized for its frequent breaking changes and versioning system (to be fair, the team is upfront about this in their release notes and I personally don't mind working around it for such a solid self-hosted alternative).\nThis week, however, the team finally delivered something they've been hinting at since being acquired by FUTO earlier this year - paid licenses. Users can pay either $25 (personal) or $100 (server) for a license that nets them a 'Licensed' badge in the software's web interface. The team continues to confirm they have no plans for paywalled features, but the decision to tag installations as either licensed or unlicensed is still unusual for a free/open-source project and has created some confusion across the community.\nUnrelatedly, if you're looking for something to spin up this weekend – there was a recent thread on Reddit prompting users for their favorite \"underdog\" self-hosted services that is absolutely worth checking out.\nHappy selfh.st/ing!",
      authorId: 2,
    },
    {
      title: "This Week in Dev-Hosted",
      description:
        "Self-hosted news, updates, launches, and a spotlight on DB Tech - a self-hosted YouTube content creator",
      content:
        "Another week, another semi-controversial Immich release. If you aren't familiar with the project, it's a Google Photos alternative often criticized for its frequent breaking changes and versioning system (to be fair, the team is upfront about this in their release notes and I personally don't mind working around it for such a solid self-hosted alternative).\nThis week, however, the team finally delivered something they've been hinting at since being acquired by FUTO earlier this year - paid licenses. Users can pay either $25 (personal) or $100 (server) for a license that nets them a 'Licensed' badge in the software's web interface. The team continues to confirm they have no plans for paywalled features, but the decision to tag installations as either licensed or unlicensed is still unusual for a free/open-source project and has created some confusion across the community.\nUnrelatedly, if you're looking for something to spin up this weekend – there was a recent thread on Reddit prompting users for their favorite \"underdog\" self-hosted services that is absolutely worth checking out.\nHappy selfh.st/ing!",
      authorId: 1,
    },
    {
      title: "This Week in Dev-Hosted",
      description:
        "Self-hosted news, updates, launches, and a spotlight on DB Tech - a self-hosted YouTube content creator",
      content:
        "Another week, another semi-controversial Immich release. If you aren't familiar with the project, it's a Google Photos alternative often criticized for its frequent breaking changes and versioning system (to be fair, the team is upfront about this in their release notes and I personally don't mind working around it for such a solid self-hosted alternative).\nThis week, however, the team finally delivered something they've been hinting at since being acquired by FUTO earlier this year - paid licenses. Users can pay either $25 (personal) or $100 (server) for a license that nets them a 'Licensed' badge in the software's web interface. The team continues to confirm they have no plans for paywalled features, but the decision to tag installations as either licensed or unlicensed is still unusual for a free/open-source project and has created some confusion across the community.\nUnrelatedly, if you're looking for something to spin up this weekend – there was a recent thread on Reddit prompting users for their favorite \"underdog\" self-hosted services that is absolutely worth checking out.\nHappy selfh.st/ing!",
      authorId: 1,
    },
    {
      title: "This Week in Dev-Hosted",
      description:
        "Self-hosted news, updates, launches, and a spotlight on DB Tech - a self-hosted YouTube content creator",
      content:
        "Another week, another semi-controversial Immich release. If you aren't familiar with the project, it's a Google Photos alternative often criticized for its frequent breaking changes and versioning system (to be fair, the team is upfront about this in their release notes and I personally don't mind working around it for such a solid self-hosted alternative).\nThis week, however, the team finally delivered something they've been hinting at since being acquired by FUTO earlier this year - paid licenses. Users can pay either $25 (personal) or $100 (server) for a license that nets them a 'Licensed' badge in the software's web interface. The team continues to confirm they have no plans for paywalled features, but the decision to tag installations as either licensed or unlicensed is still unusual for a free/open-source project and has created some confusion across the community.\nUnrelatedly, if you're looking for something to spin up this weekend – there was a recent thread on Reddit prompting users for their favorite \"underdog\" self-hosted services that is absolutely worth checking out.\nHappy selfh.st/ing!",
      authorId: 1,
    },
    {
      title: "This Week in Dev-Hosted",
      description:
        "Self-hosted news, updates, launches, and a spotlight on DB Tech - a self-hosted YouTube content creator",
      content:
        "Another week, another semi-controversial Immich release. If you aren't familiar with the project, it's a Google Photos alternative often criticized for its frequent breaking changes and versioning system (to be fair, the team is upfront about this in their release notes and I personally don't mind working around it for such a solid self-hosted alternative).\nThis week, however, the team finally delivered something they've been hinting at since being acquired by FUTO earlier this year - paid licenses. Users can pay either $25 (personal) or $100 (server) for a license that nets them a 'Licensed' badge in the software's web interface. The team continues to confirm they have no plans for paywalled features, but the decision to tag installations as either licensed or unlicensed is still unusual for a free/open-source project and has created some confusion across the community.\nUnrelatedly, if you're looking for something to spin up this weekend – there was a recent thread on Reddit prompting users for their favorite \"underdog\" self-hosted services that is absolutely worth checking out.\nHappy selfh.st/ing!",
      authorId: 1,
    },
  ]);
}
