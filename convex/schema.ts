import {defineSchema , defineTable} from "convex/server";
import {v} from "convex/values";

export default defineSchema({
    documents : defineTable({
        title: v.string(),
        userid : v.string(),
        isarchived : v.boolean(),
        parentdocuments : v.optional(v.id("documents")),
        content: v.optional(v.string()),
        coverimg : v.optional(v.string()),
        icon: v.optional(v.string()),
        ispublished : v.boolean(),
    })
    .index("by_user" , ["userid"])
    .index("by_user_parent" , ["userid", "parentdocuments"])
})