import { FilterQuery, Query } from "mongoose";


export class QueryBuilder<T> {
    public query:Record<string,unknown>;
    public modelQuery:Query<T[],T>;

    constructor(modelQuery:Query<T[],T>, query:Record<string,unknown>){
        this.modelQuery=modelQuery;
        this.query=query;
    }

    search(searchAbleField:string[]){
        let searchTerm= "";
        if(this.query?.searchTerm){
            searchTerm = this.query.searchTerm as string ;
        }

         this.modelQuery= this.modelQuery.find({
            $or:searchAbleField.map(field=>({
                [field]:{$regex:searchTerm, $options:"i"}
            } as FilterQuery<T> )) 
        });
        return this;
    };

    paginate(){
     const limit: number= Number(this.query?.limit || 10);
      let skip:number=0;

    if(this.query?.page){
        const page= Number(this.query?.page || 1)
        skip=Number((page-1)*limit)
    }
    this.modelQuery =this.modelQuery.skip(skip).limit(limit)
    return this;
    };

    sort(){
    let sortBy="-releaseDate";
    if(this.query?.sortBy){
        sortBy= this.query.sortBy as string;
    }
    this.modelQuery = this.modelQuery.sort(sortBy);
    return this;
    };

    fields(){
    let fields= " ";
    if(this.query?.fields){
        fields = (this.query?.fields as string).split(",").join(" ")
    }
    this.modelQuery= this.modelQuery.select(fields);
    return this;
    };

    filter(){
    const queryObj= {...this.query};
    const excludeFields=["searchTerm","page","limit","sortBy","fields"];
    excludeFields.forEach((e)=> delete queryObj[e]);

    this.modelQuery= this.modelQuery.find(queryObj as FilterQuery<T>);

    return this;
    }
    
}