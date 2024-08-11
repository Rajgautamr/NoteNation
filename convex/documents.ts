import {v} from "convex/values";
import{mutation , query} from "./_generated/server";
import {Doc , Id} from  "./_generated/dataModel";


export const getSidebar = query({
    args:{
        parentdocument: v.optional(v.id("documents")),
    },
    handler: async(ctx,arg) =>{
        const identity = await ctx.auth.getUserIdentity();
        if(!identity){
            throw new Error("Unauthenticated");
        }

        const userId = identity.subject;

        const documents = await ctx.db.query("documents").withIndex("by_user_parent" , (q) => q.eq("userid", userId).eq("parentdocuments" , arg.parentdocument)).filter((q) =>q.eq(q.field("isarchived") , false)).order("desc").collect()
        return documents;
    }
})
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