import {v} from "convex/values";
import{mutation , query} from "./_generated/server";
import {Doc , Id} from  "./_generated/dataModel";
export const get = query({
    handler: async(ctx) =>{
        const identity = await ctx.auth.getUserIdentity();
        if(!identity){
            throw new Error("Unauthenticated");
        }
        const documents = await ctx.db.query("documents").collect();

        return documents;
    }
});

export const create = mutation({
    args: {
        title: v.string(),
        parentdocuments: v.optional(v.id("documents"))
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if(!identity){
            throw new Error("Not Authenticated");
        }

        const userId = identity.subject;
        const document = await ctx.db.insert("documents", {
            title: args.title,
            parentdocuments: args.parentdocuments,
            userid : userId,
            isarchived: false,
            ispublished: false
        });
        return document;
    }
});